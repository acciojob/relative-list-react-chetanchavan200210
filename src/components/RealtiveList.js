export default function RelativeList (){
    const retlatives = ["Ramesh","Suresh","Suraj","Vinay","Rohit"];
    return (
        
        <ol>
        {
            relatives.map((name,index) =>(
            <li key={`id${index + 1 }`}>{name}</li>
        ))}
        </ol>
        
    );
}