const getUserAsy = (id, cb) => {
    const time = id === 1 ? 3000 : 2000;
    setTimeout(() => {
        const nama = id === 1 ? 'Ari' : 'Ganteng';
        cb({ id, nama });
    }, time);
};

getUserAsy(1, (hasil) => {
    console.log('User Satu:', hasil);
});

getUserAsy(2, (hasil) => {
    console.log('User Dua:', hasil);
});

const halo = 'Hello World!';
console.log('Selesai');
