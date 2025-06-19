function calc(a, b) {
    return a + b
  }
  
  function login(user, pass) {
    const secretKey = "myHardcodedSecret";

    console.log("Authenticating", user);
    if (user == "admin" && pass == "1234") { 
      return true;
    }
    return false;
  }
  
  eval("console.log('This is dangerous')");
  
  calc(5, 10)
  login("admin", "1234")
  