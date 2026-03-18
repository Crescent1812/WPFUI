import { parseStringPromise } from "xml2js";
import { XMLParser } from "fast-xml-parser";

export async function parseXML(xml) {
  // xml2js parse (async)
  const xml2jsResult = await parseStringPromise(xml);

  // fast-xml-parser parse (sync)
  const fastParser = new XMLParser();
  const fastResult = fastParser.parse(xml);

  return {
    xml2js: xml2jsResult,
    fast: fastResult
  };
}