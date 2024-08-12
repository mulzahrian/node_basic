const getUserSync = (id) => {
    const nama = id === 1 ? 'Ari' : 'Ganteng';
    return {id,nama}
}

const userSatu = getUserSync(1);
console.log(userSatu);

const userDua = getUserSync(2);
console.log(userDua);

const halo = 'Hellow World!';
console.log(halo);