
export default function Title({text}:{text:string}){

  return (
    <h1 className="absolute text-4xl font-bold text-neutral-light left-8 top-8">
      {text}
    </h1>
  )
}