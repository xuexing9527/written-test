// Function to input names and marks of 35 students
function inputStudentData() {
    const names = [];
    const marks = [];
  
    // Loop to input data for 35 students
    for (let i = 0; i < 35; i++) {
      let name = prompt(`Enter the name of student ${i + 1}:`).trim();
  
      // Error handling for empty name input
      while (name === "") {
        alert("Name cannot be empty. Please enter a valid name.");
        name = prompt(`Enter the name of student ${i + 1}:`).trim();
      }
  
      let mark = parseFloat(prompt(`Enter the marks of ${name}:`));
  
      // Error handling for invalid marks input
      while (isNaN(mark) || mark < 0 || mark > 100) {
        alert("Invalid input. Marks must be a number between 0 and 100.");
        mark = parseFloat(prompt(`Enter the marks of ${name}:`));
      }
  
      names.push(name);
      marks.push(mark);
    }
  
    return { names, marks };
  }
  
  // Function to find highest and lowest marks and count the students
  function findHighestAndLowestMarks(marks) {
    const highestMark = Math.max(...marks);
    const lowestMark = Math.min(...marks);
  
    const highestCount = marks.filter(mark => mark === highestMark).length;
    const lowestCount = marks.filter(mark => mark === lowestMark).length;
  
    return { highestMark, highestCount, lowestMark, lowestCount };
  }
  
  // Main function to execute the program
  function main() {
    const { names, marks } = inputStudentData();
    const { highestMark, highestCount, lowestMark, lowestCount } = findHighestAndLowestMarks(marks);
  
    // Output the results
    alert(`Highest Mark: ${highestMark}, Number of Students with Highest Mark: ${highestCount}`);
    alert(`Lowest Mark: ${lowestMark}, Number of Students with Lowest Mark: ${lowestCount}`);
  }
  
  // Call the main function to execute
  main();
  