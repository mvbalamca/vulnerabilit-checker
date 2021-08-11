import {  dockeropsSuite } from '../unittests/1.dockerops'
import {  containerScanSuite } from '../unittests/2.containerscan'
import {  vulnerabilitycheckerSuite } from '../unittests/3.vulnerabilitychecker'


describe('sequentially run tests', () => {
   dockeropsSuite()
   containerScanSuite()
   vulnerabilitycheckerSuite()
});