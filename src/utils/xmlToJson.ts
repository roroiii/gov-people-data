import xml2js, { XmlDeclarationAttributes } from 'xml2js';

export function getJSONbyXML(xml: XmlDeclarationAttributes) {
  let data = null;
  xml2js.parseString(xml, (err, result) => {
    if (err) {
      console.error(err);
    } else {
      data = result;
    }
  });
  return data;
}
