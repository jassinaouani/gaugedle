// import all properties that exist
const allProperties = ["CD", "ICD", "Gauge", "Diameter\/Width", "Shape", "Element", "Blunt",];
// exclude focalors from being the correct answer
const abilitiesToExclude = ["FOCALORSSkill", "FOCALORSBurst"]
// import abilities
const abilities = 
    {"AlbedoSkill": {
    "CD": "4s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "6.8m",
    "Shape": "Sphere",
    "Element": "Geo",
    "Weapon": "Sword",
    "Blunt": "Yes"
    },
    "AlbedoBurst": {
    "CD": "12s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "8m, 6m",
    "Shape": "Cone, Sphere",
    "Element": "Geo",
    "Blunt": "Yes"
    },
    "AlhaithamSkill": {
    "CD": "18s",
    "ICD": "Special",
    "Gauge": "1u",
    "Diameter\/Width": "11m , 8m , 7m , 4.5m",
    "Shape": " Box, Cylinder, Sphere",
    "Element": "Dendro",
    "Blunt": "No"
    },
    "AlhaithamBurst": {
    "CD": "18s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "13.6m",
    "Shape": "Cylinder",
    "Element": "Dendro",
    "Blunt": "No"
    },
    "AloySkill": {
    "CD": "20s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "8m",
    "Shape": "Sphere",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "AloyBurst": {
    "CD": "12s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "13m",
    "Shape": "Sphere",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "AmberSkill": {
    "CD": "15s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "6m",
    "Shape": "Sphere",
    "Element": "Pyro",
    "Blunt": "Yes"
    },
    "AmberBurst": {
    "CD": "12s",
    "ICD": "Special",
    "Gauge": "1u",
    "Diameter\/Width": "4m",
    "Shape": "Sphere",
    "Element": "Pyro",
    "Blunt": "No"
    },
    "AratakiIttoSkill": {
    "CD": "10s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "7m",
    "Shape": "Cylinder",
    "Element": "Geo",
    "Blunt": "Yes"
    },
    "AratakiIttoBurst": {
    "CD": "18s",
    "ICD": "None",
    "Gauge": "None",
    "Diameter\/Width": "None",
    "Shape": "None",
    "Element": "Geo",
    "Blunt": "No"
    },
    "BaizhuSkill": {
    "CD": "10s",
    "ICD": "Special",
    "Gauge": "1U",
    "Diameter\/Width": "1.2m",
    "Shape": "Sphere",
    "Element": "Dendro",
    "Blunt": "No"
    }, 
    "BaizhuBurst": {
    "CD": "20s",
    "ICD": "None",
    "Gauge": "1U",
    "Diameter\/Width": "3m",
    "Shape": "Sphere",
    "Element": "Dendro",
    "Blunt": "No"
    },
    "BarbaraSkill": {
    "CD": "32s",
    "ICD": "Special",
    "Gauge": "1u",
    "Diameter\/Width": "6m",
    "Shape": "Cylinder",
    "Element": "Hydro",
    "Blunt": "No"
    },
    "BarbaraBurst": {
    "CD": "20s",
    "ICD": "None",
    "Gauge": "None",
    "Diameter\/Width": "None",
    "Shape": "None",
    "Element": "Hydro",
    "Blunt": "No"
    },
    "BeidouSkill": {
    "CD": "7.5s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "16m, 14m, 12m",
    "Shape": "Cylinder",
    "Element": "Electro",
    "Blunt": "Yes"
    },
    "BeidouBurst": {
    "CD": "20s",
    "ICD": "Standard",
    "Gauge": "4u, 1u",
    "Diameter\/Width": "8m",
    "Shape": "Cylinder",
    "Element": "Electro",
    "Blunt": "No"
    },
    "BennettSkillPress": {
    "CD": "5s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "5m",
    "Shape": "Cylinder",
    "Element": "Pyro",
    "Blunt": "No"
    },
    "BennettSkillHold1": {
    "CD": "7.5s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "5m, 3m",
    "Shape": "Box, Cylinder",
    "Element": "Pyro",
    "Blunt": "No"
    },
    "BennettSkillHold2": {
    "CD": "10s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "7m, 4m, 5m",
    "Shape": "Box, Cylinder",
    "Element": "Pyro",
    "Blunt": "No"
    },
    "BennettBurst": {
    "CD": "15s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "12m",
    "Shape": "Cylinder",
    "Element": "Pyro",
    "Blunt": "No"
    },
    "CandaceSkillPress": {
    "CD": "6s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "6m",
    "Shape": "Cylinder",
    "Element": "Hydro",
    "Blunt": "Yes"
    },
    "CandaceSkillHold": {
    "CD": "9s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "6m",
    "Shape": "Cylinder",
    "Element": "Hydro",
    "Blunt": "Yes"
    },
    "CandaceBurst": {
    "CD": "15s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "7m",
    "Shape": "Sphere",
    "Element": "Hydro",
    "Blunt": "No"
    },
    "ChongyunSkill": {
    "CD": "15s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "5m",
    "Shape": "Sphere",
    "Element": "Cryo",
    "Blunt": "Yes"
    },
    "ChongyunBurst": {
    "CD": "12s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "7m",
    "Shape": "Sphere",
    "Element": "Cryo",
    "Blunt": "Yes"
    },
    "ColleiSkill": {
    "CD": "12s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "???",
    "Shape": "???",
    "Element": "Dendro",
    "Blunt": "No"
    },
    "ColleiBurst": {
    "CD": "15s",
    "ICD": "Special",
    "Gauge": "1u",
    "Diameter\/Width": "11m, 8m",
    "Shape": "Cylinder, Sphere",
    "Element": "Dendro",
    "Blunt": "No"
    },
    "CynoSkill": {
    "CD": "3s, 7.5s",
    "ICD": "None, Special",
    "Gauge": "1u",
    "Diameter\/Width": "7m",
    "Shape": "Cylinder",
    "Element": "Electro",
    "Blunt": "Yes"
    },
    "CynoBurst": {
    "CD": "20s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "None",
    "Shape": "None",
    "Element": "Electro",
    "Blunt": "Yes"
    },
    "DehyaSkill": {
    "CD": "20s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "12m, 10m, 9m",
    "Shape": "Cylinder",
    "Element": "Pyro",
    "Blunt": "Yes"
    },
    "DehyaBurst": {
    "CD": "18s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "13m, 5m",
    "Shape": "Box, Cylinder",
    "Element": "Pyro",
    "Blunt": "Yes"
    },
    "DilucSkill": {
    "CD": "10s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "7m, 6m, 4.4m",
    "Shape": "Box, Cylinder",
    "Element": "Pyro",
    "Blunt": "Yes"
    },
    "DilucBurst": {
    "CD": "12s",
    "ICD": "Standard",
    "Gauge": "2u",
    "Diameter\/Width": "16m",
    "Shape": "Box",
    "Element": "Pyro",
    "Blunt": "Yes"
    },
    "DionaSkillPress": {
    "CD": "6s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "1m",
    "Shape": "Sphere",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "DionaSkillHold": {
    "CD": "15s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "1m",
    "Shape": "Sphere",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "DionaBurst": {
    "CD": "20s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "13m, 6m",
    "Shape": "Cylinder",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "DoriSkill": {
    "CD": "9s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "2m",
    "Shape": "Sphere",
    "Element": "Electro",
    "Blunt": "No"
    },
    "DoriBurst": {
    "CD": "20s",
    "ICD": "Special",
    "Gauge": "1u",
    "Diameter\/Width": "1m",
    "Shape": "Box",
    "Element": "Electro",
    "Blunt": "No"
    },
    "EulaSkillPress": {
    "CD": "4s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "7m",
    "Shape": "Cylinder",
    "Element": "Cryo",
    "Blunt": "Yes"
    },
    "EulaSkillHold": {
    "CD": "10s",
    "ICD": "None, Standard",
    "Gauge": "1u",
    "Diameter\/Width": "11m, 7m",
    "Shape": "Cylinder, Sphere",
    "Element": "Cryo",
    "Blunt": "Yes"
    },
    "EulaBurst": {
    "CD": "20s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "16m, 13m",
    "Shape": "Cylinder, Sphere",
    "Element": "Cryo",
    "Blunt": "Yes"
    },
    "FaruzanSkill": {
    "CD": "6s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "12m, 6m",
    "Shape": "Cylinder, Sphere",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "FaruzanBurst": {
    "CD": "20s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "12.6m",
    "Shape": "Sphere",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "FischlSkill": {
    "CD": "25s",
    "ICD": "Special",
    "Gauge": "1u",
    "Diameter\/Width": "4m, 0.2m",
    "Shape": "Box, Sphere",
    "Element": "Electro",
    "Blunt": "No"
    },
    "FischlBurst": {
    "CD": "15s",
    "ICD": "Special",
    "Gauge": "2u",
    "Diameter\/Width": "1m",
    "Shape": "Sphere",
    "Element": "Electro",
    "Blunt": "Yes, No"
    },
    "GanyuSkill": {
    "CD": "10s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "8m",
    "Shape": "Cylinder",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "GanyuBurst": {
    "CD": "15s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "5m",
    "Shape": "Sphere",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "GorouSkill": {
    "CD": "10s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "10m",
    "Shape": "Cylinder",
    "Element": "Geo",
    "Blunt": "Yes"
    },
    "GorouBurst": {
    "CD": "20s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "10m, 7m",
    "Shape": "Cylinder",
    "Element": "Geo",
    "Blunt": "Yes"
    },
    "HuTaoSkill": {
    "CD": "16s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "None",
    "Shape": "None",
    "Element": "Pyro",
    "Blunt": "No"
    },
    "HuTaoBurst": {
    "CD": "15s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "12m",
    "Shape": "Cylinder",
    "Element": "Pyro",
    "Blunt": "No"
    },
    "JeanSkill": {
    "CD": "6s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "4m",
    "Shape": "Box",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "JeanBurst": {
    "CD": "20s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "12m",
    "Shape": "Cylinder",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "KaedeharaKazuhaSkillPress": {
    "CD": "6s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "10m",
    "Shape": "Cylinder",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "KaedeharaKazuhaSkillHold": {
    "CD": "9s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "18m",
    "Shape": "Cylinder",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "KaedeharaKazuhaBurst": {
    "CD": "15s",
    "ICD": "None",
    "Gauge": "2u, 1u",
    "Diameter\/Width": "18m",
    "Shape": "Cylinder",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "KaeyaSkill": {
    "CD": "6s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "4m",
    "Shape": "Box",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "KaeyaBurst": {
    "CD": "15s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "4m",
    "Shape": "Sphere",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "KamisatoAyakaSkill": {
    "CD": "10s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "9m",
    "Shape": "Cylinder",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "KamisatoAyakaBurst": {
    "CD": "20s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "10m, 6m",
    "Shape": "Sphere",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "KamisatoAyatoSkill": {
    "CD": "12s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "7m",
    "Shape": "Sphere",
    "Element": "Hydro",
    "Blunt": "No"
    },
    "KamisatoAyatoBurst": {
    "CD": "20s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "7m",
    "Shape": "Cylinder",
    "Element": "Hydro",
    "Blunt": "No"
    },
    "KavehSkill": {
    "CD": "6s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "10m",
    "Shape": "Cylinder",
    "Element": "Dendro",
    "Blunt": "No"
    },
    "KavehBurst": {
    "CD": "20s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "10m",
    "Shape": "Cylinder",
    "Element": "Dendro",
    "Blunt": "No"
    },
    "KeqingSkill": {
    "CD": "7.5s",
    "ICD": "None, Standard",
    "Gauge": "2u, 1u",
    "Diameter\/Width": "6m, 5m, 3.2m",
    "Shape": "Cylinder, Sphere",
    "Element": "Electro",
    "Blunt": "No"
    },
    "KeqingBurst": {
    "CD": "12s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "16m",
    "Shape": "Cylinder",
    "Element": "Electro",
    "Blunt": "No"
    },
    "KleeSkill": {
    "CD": "20s",
    "ICD": "Standard",
    "Gauge": "2u, 1u",
    "Diameter\/Width": "8m, 4m",
    "Shape": "Sphere",
    "Element": "Pyro",
    "Blunt": "Yes, No"
    },
    "KleeBurst": {
    "CD": "15s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "3m",
    "Shape": "Sphere",
    "Element": "Pyro",
    "Blunt": "No"
    },
    "KujouSaraSkill": {
    "CD": "10s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "12m",
    "Shape": "Cylinder",
    "Element": "Electro",
    "Blunt": "No"
    },
    "KujouSaraBurst": {
    "CD": "20s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "12m, 6m",
    "Shape": "Cylinder",
    "Element": "Electro",
    "Blunt": "No"
    },
    "KukiShinobuSkill": {
    "CD": "15s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "8m",
    "Shape": "Cylinder",
    "Element": "Electro",
    "Blunt": "Yes, No"
    },
    "KukiShinobuBurst": {
    "CD": "15s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "8m",
    "Shape": "Cylinder",
    "Element": "Electro",
    "Blunt": "No"
    },
    "LaylaSkill": {
    "CD": "12s",
    "ICD": "Special",
    "Gauge": "1u",
    "Diameter\/Width": "5m, 1.6m",
    "Shape": "Cylinder, Sphere",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "LaylaBurst": {
    "CD": "12s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "3m",
    "Shape": "Sphere",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "LisaSkillPress": {
    "CD": "1s",
    "ICD": "Special",
    "Gauge": "1u",
    "Diameter\/Width": "2m",
    "Shape": "Sphere",
    "Element": "Electro",
    "Blunt": "No"
    },
    "LisaSkillHold": {
    "CD": "16s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "20m",
    "Shape": "Cylinder",
    "Element": "Electro",
    "Blunt": "No"
    },
    "LisaBurst": {
    "CD": "20s",
    "ICD": "Standard",
    "Gauge": "1u, 0u",
    "Diameter\/Width": "14m, 2m",
    "Shape": "Cylinder, Sphere",
    "Element": "Electro",
    "Blunt": "No"
    },
    "MikaSkill": {
    "CD": "15s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "2.5m, 0.3m, 0.2m",
    "Shape": "Box",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "MikaBurst": {
    "CD": "18s",
    "ICD": "None",
    "Gauge": "None",
    "Diameter\/Width": "None",
    "Shape": "None",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "MonaSkill": {
    "CD": "12s",
    "ICD": "None, Standard",
    "Gauge": "1u",
    "Diameter\/Width": "10m",
    "Shape": "Sphere",
    "Element": "Hydro",
    "Blunt": "No"
    },
    "MonaBurst": {
    "CD": "15s",
    "ICD": "Standard",
    "Gauge": "2u, 1u",
    "Diameter\/Width": "20m",
    "Shape": "Sphere",
    "Element": "Hydro",
    "Blunt": "No"
    },
    "NahidaSkillPress": {
    "CD": "5s",
    "ICD": "Special",
    "Gauge": "1.5u, 1u",
    "Diameter\/Width": "9.2m",
    "Shape": "Cylinder",
    "Element": "Dendro",
    "Blunt": "No"
    },
    "NahidaSkillHold": {
    "CD": "6s",
    "ICD": "Special",
    "Gauge": "1.5u, 1u",
    "Diameter\/Width": "Big",
    "Shape": "Sphere",
    "Element": "Dendro",
    "Blunt": "No"
    },
    "NahidaBurst": {
    "CD": "13.5s",
    "ICD": "None",
    "Gauge": "None",
    "Diameter\/Width": "None",
    "Shape": "None",
    "Element": "Dendro",
    "Blunt": "No"
    },
    "NilouSkill": {
    "CD": "18s",
    "ICD": "Special",
    "Gauge": "1u",
    "Diameter\/Width": "5.4m, 5m, 3.6m, 2.7m, 1.75m",
    "Shape": "Box, Cylinder",
    "Element": "Hydro",
    "Blunt": "No"
    },
    "NilouBurst": {
    "CD": "18s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "???",
    "Shape": "???",
    "Element": "Hydro",
    "Blunt": "No"
    },
    "NingguangSkill": {
    "CD": "12s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "10m",
    "Shape": "Cylinder",
    "Element": "Geo",
    "Blunt": "Yes"
    },
    "NingguangBurst": {
    "CD": "12s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "1m",
    "Shape": "Sphere",
    "Element": "Geo",
    "Blunt": "Yes"
    },
    "NoelleSkill": {
    "CD": "24s",
    "ICD": "Standard",
    "Gauge": "2u",
    "Diameter\/Width": "4m",
    "Shape": "Cylinder",
    "Element": "Geo",
    "Blunt": "Yes"
    },
    "NoelleBurst": {
    "CD": "15s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "13m, 8m",
    "Shape": "Cylinder",
    "Element": "Geo",
    "Blunt": "Yes"
    },
    "QiqiSkill": {
    "CD": "30s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "5m",
    "Shape": "Cylinder",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "QiqiBurst": {
    "CD": "20s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "14m",
    "Shape": "Cylinder",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "RaidenShogunSkill": {
    "CD": "10s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "10m, 8m",
    "Shape": "Sphere",
    "Element": "Electro",
    "Blunt": "No"
    },
    "RaidenShogunBurst": {
    "CD": "18s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "13m",
    "Shape": "Box",
    "Element": "Electro",
    "Blunt": "No"
    },
    "RazorSkillPress": {
    "CD": "6s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "4.8m",
    "Shape": "Cylinder",
    "Element": "Electro",
    "Blunt": "No"
    },
    "RazorSkillHold": {
    "CD": "10s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "10m",
    "Shape": "Sphere",
    "Element": "Electro",
    "Blunt": "Yes"
    },
    "RazorBurst": {
    "CD": "20s",
    "ICD": "Standard",
    "Gauge": "2u, 1u",
    "Diameter\/Width": "10m",
    "Shape": "Sphere",
    "Element": "Electro",
    "Blunt": "Yes, No"
    },
    "RosariaSkill": {
    "CD": "6s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "5.6m, 2m",
    "Shape": "Box, Cylinder",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "RosariaBurst": {
    "CD": "15s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "13m, 12m, 7m",
    "Shape": "Cylinder",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "SangonomiyaKokomiSkill": {
    "CD": "20s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "12m",
    "Shape": "Sphere",
    "Element": "Hydro",
    "Blunt": "No"
    },
    "SangonomiyaKokomiBurst": {
    "CD": "18s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "10m",
    "Shape": "Sphere",
    "Element": "Hydro",
    "Blunt": "No"
    },
    "SayuSkill": {
    "CD": "6s-11s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "5m, 6m",
    "Shape": "Cylinder",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "SayuBurst": {
    "CD": "20s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "9m, 7m",
    "Shape": "Cylinder",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "ShenheSkillPress": {
    "CD": "10s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "???",
    "Shape": "???",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "ShenheSkillHold": {
    "CD": "15s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "8m",
    "Shape": "Sphere",
    "Element": "Cryo",
    "Blunt": "No"
    },
    "ShenheBurst": {
    "CD": "20s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "14m, 8m",
    "Shape": "Cone, Cylinder",
    "Element": "Cryo",
    "Blunt": "Yes, No"
    },
    "ShikanoinHeizouSkill": {
    "CD": "10s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "4m, 3m",
    "Shape": "Box",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "ShikanoinHeizouBurst": {
    "CD": "12s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "12m, 5m",
    "Shape": "Sphere",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "SucroseSkill": {
    "CD": "15s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "12m",
    "Shape": "Cylinder",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "SucroseBurst": {
    "CD": "20s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "10m",
    "Shape": "Cylinder",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "TartagliaSkill": {
    "CD": "6s-36s, 45s",
    "ICD": "None",
    "Gauge": "2u, 1u",
    "Diameter\/Width": "6m",
    "Shape": "Sphere",
    "Element": "Hydro",
    "Blunt": "Yes, No"
    },
    "TartagliaBurst": {
    "CD": "15s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "16m, 12m, 10m",
    "Shape": "Cylinder, Sphere",
    "Element": "Hydro",
    "Blunt": "No"
    },
    "ThomaSkill": {
    "CD": "15s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "6m",
    "Shape": "Cylinder",
    "Element": "Pyro",
    "Blunt": "No"
    },
    "ThomaBurst": {
    "CD": "20s",
    "ICD": "Standard",
    "Gauge": "2u, 1u",
    "Diameter\/Width": "8m, 4.5m",
    "Shape": "Box, Cylinder",
    "Element": "Pyro",
    "Blunt": "No"
    },
    "TighnariSkill": {
    "CD": "12s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "12m",
    "Shape": "Cylinder",
    "Element": "Dendro",
    "Blunt": "No"
    },
    "TighnariBurst": {
    "CD": "12s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "2m",
    "Shape": "Sphere",
    "Element": "Dendro",
    "Blunt": "No"
    },
    "AnemoTravelerSkillPress": {
    "CD": "5s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "6m",
    "Shape": "Cone",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "AnemoTravelerSkillHold": {
    "CD": "8s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "6m",
    "Shape": "Cone",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "AnemoTravelerBurst": {
    "CD": "15s",
    "ICD": "Standard",
    "Gauge": "2u, 1u",
    "Diameter\/Width": "3m, 2.5m",
    "Shape": "Box",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "DendroTravelerSkill": {
    "CD": "8s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "6.5m",
    "Shape": "Cone",
    "Element": "Dendro",
    "Blunt": "No"
    },
    "DendroTravelerBurst": {
    "CD": "20s",
    "ICD": "Standard",
    "Gauge": "2u, 1u",
    "Diameter\/Width": "13m, 8m, 4m",
    "Shape": "Cylinder",
    "Element": "Dendro",
    "Blunt": "No"
    },
    "ElectroTravelerSkill": {
    "CD": "13.5s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "???",
    "Shape": "???",
    "Element": "Electro",
    "Blunt": "No"
    },
    "ElectroTravelerBurst": {
    "CD": "20s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "10m, 4m",
    "Shape": "Sphere",
    "Element": "Electro",
    "Blunt": "Ye, No"
    },
    "GeoTravelerSkill": {
    "CD": "8s",
    "ICD": "Standard",
    "Gauge": "2u",
    "Diameter\/Width": "6m",
    "Shape": "Cylinder",
    "Element": "Geo",
    "Blunt": "Yes"
    },
    "GeoTravelerBurst": {
    "CD": "15s",
    "ICD": "Standard",
    "Gauge": "2u",
    "Diameter\/Width": "12m",
    "Shape": "Cylinder",
    "Element": "Geo",
    "Blunt": "Yes"
    },
    "VentiSkillPress": {
    "CD": "6s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "6m",
    "Shape": "Sphere",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "VentiSkillHold": {
    "CD": "15s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "12m",
    "Shape": "Sphere",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "VentiBurst": {
    "CD": "15s",
    "ICD": "Special",
    "Gauge": "1u",
    "Diameter\/Width": "12m, 8m",
    "Shape": "Sphere",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "WandererSkill": {
    "CD": "6s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "12m",
    "Shape": "Cylinder",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "WandererBurst": {
    "CD": "15s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "10m",
    "Shape": "Cylinder",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "XianglingSkill": {
    "CD": "12s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "5m",
    "Shape": "Cone",
    "Element": "Pyro",
    "Blunt": "No"
    },
    "XianglingBurst": {
    "CD": "20s",
    "ICD": "Standard, None",
    "Gauge": "1u",
    "Diameter\/Width": "5m, 6m",
    "Shape": "Cylinder",
    "Element": "Pyro",
    "Blunt": "No"
    },
    "XiaoSkill": {
    "CD": "10s",
    "ICD": "Special",
    "Gauge": "1u",
    "Diameter\/Width": "1.6m",
    "Shape": "Sphere",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "XiaoBurst": {
    "CD": "18s",
    "ICD": "None",
    "Gauge": "None",
    "Diameter\/Width": "None",
    "Shape": "None",
    "Element": "Anemo",
    "Blunt": "No"
    },
    "XingqiuSkill": {
    "CD": "21s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "6m, 3.5m",
    "Shape": "Box, Cylinder",
    "Element": "Hydro",
    "Blunt": "No"
    },
    "XingqiuBurst": {
    "CD": "20s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "1m",
    "Shape": "Sphere",
    "Element": "Hydro",
    "Blunt": "No"
    },
    "XinyanSkill": {
    "CD": "18s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "6m",
    "Shape": "Cylinder",
    "Element": "Pyro",
    "Blunt": "Yes, No"
    },
    "XinyanBurst": {
    "CD": "15s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "8m, 6m",
    "Shape": "Cylinder",
    "Element": "Pyro",
    "Blunt": "No"
    },
    "YaeMikoSkill": {
    "CD": "4s",
    "ICD": "Standard",
    "Gauge": "1u",
    "Diameter\/Width": "1m",
    "Shape": "Cylinder",
    "Element": "Electro",
    "Blunt": "No"
    },
    "YaeMikoBurst": {
    "CD": "22s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "14m",
    "Shape": "Cylinder",
    "Element": "Electro",
    "Blunt": "No"
    },
    "YanfeiSkill": {
    "CD": "9s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "7m",
    "Shape": "Sphere",
    "Element": "Pyro",
    "Blunt": "Yes"
    },
    "YanfeiBurst": {
    "CD": "20s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "13m",
    "Shape": "Cylinder",
    "Element": "Pyro",
    "Blunt": "Yes"
    },
    "YaoyaoSkill": {
    "CD": "15s",
    "ICD": "Special",
    "Gauge": "1u",
    "Diameter\/Width": "4m",
    "Shape": "Sphere",
    "Element": "Dendro",
    "Blunt": "No"
    },
    "YaoyaoBurst": {
    "CD": "20s",
    "ICD": "Special",
    "Gauge": "1u",
    "Diameter\/Width": "6m, 4m",
    "Shape": "Cylinder, Sphere",
    "Element": "Dendro",
    "Blunt": "No"
    },
    "YelanSkill": {
    "CD": "10s",
    "ICD": "None",
    "Gauge": "1u",
    "Diameter\/Width": "???",
    "Shape": "???",
    "Element": "Hydro",
    "Blunt": "No"
    },
    "YelanBurst": {
    "CD": "18s",
    "ICD": "Special",
    "Gauge": "2u, 1u",
    "Diameter\/Width": "12m, 1m",
    "Shape": "Cylinder, Sphere",
    "Element": "Hydro",
    "Blunt": "No"
    },
    "YoimiyaSkill": {
    "CD": "18s",
    "ICD": "None",
    "Gauge": "None",
    "Diameter\/Width": "None",
    "Shape": "None",
    "Element": "Pyro",
    "Blunt": "No"
    },
    "YoimiyaBurst": {
    "CD": "15s",
    "ICD": "Standard",
    "Gauge": "2u, 1u",
    "Diameter\/Width": "12m, 6m",
    "Shape": "Sphere",
    "Element": "Pyro",
    "Blunt": "Yes"
    },
    "YunJinSkillPress": {
    "CD": "9s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "8m",
    "Shape": "Cylinder",
    "Element": "Geo",
    "Blunt": "No"
    },
    "YunJinSkillHold": {
    "CD": "9s",
    "ICD": "None",
    "Gauge": "4u, 2u",
    "Diameter\/Width": "16m, 12m",
    "Shape": "Cylinder",
    "Element": "Geo",
    "Blunt": "No"
    },
    "YunJinBurst": {
    "CD": "15s",
    "ICD": "None",
    "Gauge": "2u",
    "Diameter\/Width": "12m",
    "Shape": "Cylinder",
    "Element": "Geo",
    "Blunt": "Yes"
    },
    "ZhongliSkillPress": {
    "CD": "4s",
    "ICD": "Standard",
    "Gauge": "2u, 1u",
    "Diameter\/Width": "8m, 4m",
    "Shape": "Box, Sphere",
    "Element": "Geo",
    "Blunt": "Yes"
    },
    "ZhongliSkillHold": {
    "CD": "12s",
    "ICD": "Standard",
    "Gauge": "2u, 1u",
    "Diameter\/Width": "20m, 8m",
    "Shape": "Box, Cylinder",
    "Element": "Geo",
    "Blunt": "Yes"
    },
    "ZhongliBurst": {
    "CD": "12s",
    "ICD": "None",
    "Gauge": "4u",
    "Diameter\/Width": "15m",
    "Shape": "Cylinder",
    "Element": "Geo",
    "Blunt": "Yes"
    },

    /* For fun */
    "FOCALORSSkill": {
    "CD": "10s",
    "ICD": "Special",
    "Gauge": "1u, 1.5u",
    "Diameter\/Width": "9m",
    "Shape": "Cylinder",
    "Element": "Hydro",
    "Blunt": "No"
    },
    "FOCALORSBurst": {
    "CD": "13.5s",
    "ICD": "None",
    "Gauge": "None",
    "Diameter\/Width": "None",
    "Shape": "None",
    "Element": "Hydro",
    "Blunt": "No"
    },
}