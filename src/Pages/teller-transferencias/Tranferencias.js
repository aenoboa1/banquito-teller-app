export const accountList = [
    {
        numeroCuenta: '1234567890',
        propietario: 'Sandra de la Torre',
        saldoDisponible: '250$'
    },
    {
        numeroCuenta: '1705681284',
        tipoCuenta: 'Ahorros',
        propietario: 'Carlos Acosta'
    },
    {
        numeroCuenta: '1724405269',
        tipoCuenta: 'Corriente',
        propietario: 'Mateo Noboa'
    },
    {
        numeroCuenta: '2203691341',
        tipoCuenta: 'Ahorros',
        propietario: 'Marcelo Arias'
    },
    {
        numeroCuenta: '9876543210',
        tipoCuenta: 'Corriente',
        propietario: 'Francisco Moran'
    }
];

export const getAccountList = () => {
    return accountList;
}

export const getAccountByNumber = (accountNumber) => {
    // console.log("--------------- ",accountNumber);
    return accountList.find(account => account.numeroCuenta === accountNumber);
}