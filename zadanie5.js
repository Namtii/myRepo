// Task 5: Operating on Objects

const items = {
  apple: 'Favorite fruit',
  ferrari: 'Expensive car',
  banana: 'Yellow fruit',
  orange: 'Citrus fruit',
  panda: 'Cute animal',
};
 
// 1. Display all keys with letter 'n'
  

console.log(Object.keys(items).filter(k => k.includes('n')));


// 2. Display all values with letter 'e'
 

console.log(Object.values(items).filter(v => v.includes('e')));
 

// 3. Display all entries with letter 'n' in keys and 'fruit' in values


console.log(Object.entries(items).filter(([key, value]) => key.includes('n') && value.includes('fruit')));
  