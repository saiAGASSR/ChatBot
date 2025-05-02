const people = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
  ];
  
  
  
  export default function List() {
    const listItems = people.map(person =>
      <li>{person}</li>
    );
    console.log("before Mapping",people);
    console.log("After Mapping",listItems);
    
    return <ul>{listItems}</ul>;
  }
  
  