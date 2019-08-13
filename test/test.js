import runBigwigTests from "./testBigwig.js";
import runBAMTests from "./testBAM.js";
import runBAMIndexTests from "./testBamIndex.js";
import runAedTests from "./testAED.js";
import runBedTests from "./testBED.js";
import runBEDGraphTests from "./testBEDGraph.js";
import runBufferedReaderTests from "./testBufferedReader.js";
import runCoverageColoredRenderingTests from "./testCoverageColoredRendering.js";
import runWigTests from "./testWig.js";
import runGFFTests from "./testGFF.js";
import runFastaTests from "./testFasta.js";

import runTabixTests from "./testTabix.js";
import runGenomeTests from "./testGenome.js";
import runTDFTests from "./testTDF.js";
import runSampleInformationTests from "./testSampleInformation.js";
import runHtsgetTests from "./testHtsgetReader.js";
import runSessionTests from "./testSessions.js";
import runVariantTests from "./testVariant.js";
import runBrowserTests from "./testBrowser.js";
import runUtilTests from "./testUtils.js";
import runIgvXhrTests from "./testIgvXhr.js";
import runCRAMTests from "./testCRAM.js";

runBigwigTests();
runBAMTests();
runBAMIndexTests();
runAedTests();
runBedTests();
runBEDGraphTests();
runBufferedReaderTests();
runCoverageColoredRenderingTests();
runWigTests();
runGFFTests();
runFastaTests();
//runSegTests();
runTabixTests();
runGenomeTests();
runTDFTests();
runSampleInformationTests();
runHtsgetTests();
runSessionTests();
runVariantTests();
runBrowserTests();
runUtilTests();
runIgvXhrTests();
runCRAMTests();
