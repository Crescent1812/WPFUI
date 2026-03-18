import { DOMParser } from "xmldom";
import { parseStringPromise } from "xml2js";

export async function parseXML(xml) {
  // DOM-style parse
  const dom = new DOMParser().parseFromString(xml, "application/xml");

  // xml2js object parse
  const json = await parseStringPromise(xml);

  return { dom, json };
}