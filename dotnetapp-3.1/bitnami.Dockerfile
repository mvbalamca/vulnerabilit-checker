
FROM bitnami/dotnet-sdk:3.1 AS build
WORKDIR /source


# copy csproj and restore as distinct layers
COPY ../dotnetapp-3.1/dotnetapp.csproj .
RUN dotnet restore

# copy and publish app and libraries
COPY ./dotnetapp-3.1  .
RUN dotnet publish -c release -o /app --no-restore

# final stage/image
FROM bitnami/aspnet-core:3.1

RUN useradd -r -u 1001 -g root nonroot
RUN chown -R nonroot /app
USER nonroot
WORKDIR /app

COPY --from=build /app .
ENTRYPOINT ["dotnet", "dotnetapp.dll"]