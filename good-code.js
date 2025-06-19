function calculateSum(numbers) {
    if (!Array.isArray(numbers)) {
      throw new Error("Input must be an array of numbers.");
    }
    return numbers.reduce((sum, num) => sum + num, 0);
  }
  
  function greetUser(name) {
    return `Hello, ${name}! Welcome to PRNinja.`;
  }
  
  console.log(calculateSum([1, 2, 3, 4])); // 10
  console.log(greetUser("Sayantan"));
  