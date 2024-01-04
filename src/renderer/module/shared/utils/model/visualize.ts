// // Takes a TDocStd_Document, creates a GLB file from it and returns a ObjectURL
//
// import { Handle_TDocStd_Document_2, TDocStd_Document } from "opencascade.js/dist/module.TKLCAF.wasm";
// import ThisModule from "opencascade.js/dist/opencascade";
// import TCollection_ExtendedString_1 = ThisModule.TCollection_ExtendedString_1;
//
// export function visualizeDoc(oc: any, doc: any): string {
//   // Export a GLB file (this will also perform the meshing)
//   const cafWriter = new oc.RWGltf_CafWriter(new oc.TCollection_AsciiString_2('./file.glb'), true);
//   cafWriter.Perform_2(new oc.Handle_TDocStd_Document_2(doc), new oc.TColStd_IndexedDataMapOfStringString_1(), new oc.Message_ProgressRange_1());
//
//   // Read the GLB file from the virtual file system
//   const glbFile = oc.FS.readFile('./file.glb', { encoding: 'binary' });
//   return URL.createObjectURL(new Blob([glbFile.buffer], { type: 'model/gltf-binary' }));
// }
//
// // Takes TopoDS_Shape, add to document, create GLB file from it and returns a ObjectURL
// export function visualizeShapes(oc: any, shapes_: any): string {
//   const shapes = Array.isArray(shapes_) ? shapes_ : [shapes_];
//
//   // Create a document add our shapes
//   const aDoc = new Handle_TDocStd_Document_2(new TDocStd_Document(new TCollection_ExtendedString_1()));
//   console.log(aDoc);
//   const doc = new oc.TDocStd_Document(new oc.TCollection_ExtendedString_1());
//   const shapeTool = oc.XCAFDoc_DocumentTool.ShapeTool(doc.Main()).get();
//   for (const s of shapes) {
//     shapeTool.SetShape(shapeTool.NewShape(), s);
//     // Tell OpenCascade that we want our shape to get meshed
//     new oc.BRepMesh_IncrementalMesh_2(s, 0.1, false, 0.1, false);
//   }
//
//   // Return our visualized document
//   return visualizeDoc(oc, doc);
// }


import { readStepData, triangulate, writeGlbData } from "opencascade-tools";

export const visualizeModel = (oc: any, model: any): Uint8Array => {
  const docHandle = readStepData(oc, model);

  const linDeflection = 0.1;
  const angDeflection = 0.1;
  const isRelative = false;
  const isInParallel = false;

  triangulate(oc, docHandle.get(), linDeflection, isRelative, angDeflection, isInParallel);
  return writeGlbData(oc, docHandle);
}
