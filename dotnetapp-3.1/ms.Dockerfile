
#FROM harbor.dell.com/omcs_nonprod/base_images/ms-dotnetcore:3.1-sdk AS build

ARG VERSION=3.1-alpine

FROM mcr.microsoft.com/dotnet/core/sdk:$VERSION AS build
WORKDIR /source

# copy csproj and restore as distinct layers
COPY ./dotnetapp-3.1/dotnetapp.csproj .
RUN dotnet restore

# copy and publish app and libraries
COPY ./dotnetapp-3.1  .
RUN dotnet publish -c release -o /app --no-restore

# final stage/image
#FROM harbor.dell.com/omcs_nonprod/base_images/ms-dotnetcore:3.1-runtime
FROM mcr.microsoft.com/dotnet/core/aspnet:$VERSION


#RUN groupadd -r noroot && useradd -r -g noroot noroot
RUN addgroup -S appgroup && adduser -S noroot -G appgroup
USER noroot

WORKDIR /app
COPY --from=build /app .
ENTRYPOINT ["dotnet", "dotnetapp.dll"]