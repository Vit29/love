import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader';
import * as THREE from 'three';

export const loaderModel = (path, tmlPath, onLoad) => {
    const loaderObj = new OBJLoader();
    const loaderMTL = new MTLLoader();

    loaderMTL.load(tmlPath, (materials) => {
        materials.preload();
        loaderObj.setMaterials(materials);
        loaderObj.load(path,(obj) => {
            onLoad(obj)
        })
    })

}
 