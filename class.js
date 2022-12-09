class Account{
    acc_Bal=500;
    open_Account(){
    console.log("successfully open the account")
    }
    close_Account(){
    console.log("closed the account")
    }
    withdraw_amount(){
        console.log("no amount")
    }


}
let a1=new Account();
console.log(a1.acc_Bal)
a1.open_Account()
a1.close_Account()
let a2=new Account()
a2.open_Account()
a2.withdraw_amount()