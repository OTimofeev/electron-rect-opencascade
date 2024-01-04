// @ts-ignore
import Model from "../../../../../assets/models/test.step";
import { useEffect, useState } from "react";
import InitOpenCascade from "opencascade.js";
import { visualizeModel } from "../utils/model/visualize";
import '@google/model-viewer';

export const ModelComponent = () => {
  const [model, setModel] = useState<string | null>(null);

  useEffect(() => {
    displayModel()
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const displayModel = async () => {
    const oc = await InitOpenCascade();
    const arrayModel = visualizeModel(oc, Model);
    const blob = new Blob([arrayModel], { type: "model/gltf-binary" });
    const url = URL.createObjectURL(blob);
    setModel(url);
  };


  return (
    <div>
      {
        model && <model-viewer className={'w-96 h-60'} src={model} style={{ width: '600px', height: '400px' }} alt="A 3D model" auto-rotate={true} camera-controls={true} />
      }
    </div>
  );
};
