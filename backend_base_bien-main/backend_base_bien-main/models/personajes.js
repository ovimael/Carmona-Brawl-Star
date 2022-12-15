const modeloPersonjes ={
quieryGetUsers: "SELECT * FROM Personajes",

//se sustituye cada elemento del arreglo por cada signo de interrogacion, y se acomodan en el orden respectivo
//si se usa 2 veces se pasa las 2 veces
quieryGetUsersByeID: `SELECT * FROM Personajes WHERE ID = ?`,
quieryDeleteUsersByeID: `UPDATE Personajes SET Activo = 'N' WHERE ID = ?`,
quieryUsersExists: `SELECT nombre FROM Personajes WHERE nombre = ?`,
quieryAddUser:`INSERT INTO Personajes (
    nombre,
    salud,
    rareza,
    dañobasico,
    dañosuper,
    recarga,
    velocidad,
    Gadhet,
    Activo
    ) VALUES (
    ?,
    ?,
    ?,
    ?,
    ?,
    ?,
    ?,
    ?
    )`,
quieryGetUsersInfo: `
SELECT nombre, salud, rareza, dañobasico, dañosuper, recarga, velocidad, Gadhet 
FROM Personajes
`,
quieryUpdateByeUsuario: `
UPDATE Personajes SET 
nombre = ?,
salud = ?,
rareza =?,
dañobasico = ?,
dañosuper = ?,
recarga = ?,
velocidad = ?,
Gadhet =?,
`
}

module.exports = modeloPersonjes