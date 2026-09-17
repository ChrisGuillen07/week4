const canvas = document.getElementById("renderCanvas");

const engine = new BABYLON.Engine(canvas, true);

const scene = new BABYLON.Scene(engine);

scene.clearColor = new BABYLON.Color4(0.08, 0.05, 0.03, 1);


// CAMERA
const camera = new BABYLON.ArcRotateCamera(
    "camera",
    -Math.PI / 2,
    Math.PI / 3,
    8,
    new BABYLON.Vector3(0, 0.7, 0),
    scene
);

camera.attachControl(canvas, true);


// LIGHT
const light = new BABYLON.HemisphericLight(
    "light",
    new BABYLON.Vector3(0, 1, 0),
    scene
);

light.intensity = 1.5;


// PLATE
const plate = BABYLON.MeshBuilder.CreateCylinder(
    "plate",
    {
        height: 0.15,
        diameter: 6,
        tessellation: 64
    },
    scene
);

plate.position.y = 0.1;

const plateMaterial = new BABYLON.StandardMaterial(
    "plateMaterial",
    scene
);

plateMaterial.diffuseColor = new BABYLON.Color3(
    0.95,
    0.95,
    0.95
);

plate.material = plateMaterial;


// ENCHILADA
const enchilada = BABYLON.MeshBuilder.CreateCylinder(
    "enchilada",
    {
        height: 4,
        diameter: 1.3,
        tessellation: 48
    },
    scene
);

enchilada.rotation.z = Math.PI / 2;
enchilada.position.y = 0.8;

const enchiladaMaterial = new BABYLON.StandardMaterial(
    "enchiladaMaterial",
    scene
);

enchiladaMaterial.diffuseColor = new BABYLON.Color3(
    0.65,
    0.12,
    0.03
);

enchilada.material = enchiladaMaterial;


// CHEESE
const cheeseMaterial = new BABYLON.StandardMaterial(
    "cheeseMaterial",
    scene
);

cheeseMaterial.diffuseColor = new BABYLON.Color3(
    1,
    0.75,
    0.1
);

for (let i = 0; i < 12; i++) {

    const cheese = BABYLON.MeshBuilder.CreateBox(
        "cheese" + i,
        {
            width: 0.3,
            height: 0.08,
            depth: 0.5
        },
        scene
    );

    cheese.position.x = -1.5 + i * 0.27;
    cheese.position.y = 1.5;
    cheese.position.z = (Math.random() - 0.5) * 0.7;

    cheese.rotation.y = Math.random() * Math.PI;

    cheese.material = cheeseMaterial;
}


// GREEN TOPPINGS
const greenMaterial = new BABYLON.StandardMaterial(
    "greenMaterial",
    scene
);

greenMaterial.diffuseColor = new BABYLON.Color3(
    0.05,
    0.45,
    0.08
);

for (let i = 0; i < 10; i++) {

    const topping = BABYLON.MeshBuilder.CreateSphere(
        "topping" + i,
        {
            diameter: 0.16,
            segments: 8
        },
        scene
    );

    topping.position.x = (Math.random() - 0.5) * 3;
    topping.position.y = 1.6;
    topping.position.z = (Math.random() - 0.5) * 0.7;

    topping.material = greenMaterial;
}


// GROUND
const ground = BABYLON.MeshBuilder.CreateGround(
    "ground",
    {
        width: 12,
        height: 12
    },
    scene
);

const groundMaterial = new BABYLON.StandardMaterial(
    "groundMaterial",
    scene
);

groundMaterial.diffuseColor = new BABYLON.Color3(
    0.25,
    0.12,
    0.05
);

ground.material = groundMaterial;


// START THE 3D SCENE
engine.runRenderLoop(function () {
    scene.render();
});


// RESIZE
window.addEventListener("resize", function () {
    engine.resize();
});