
export const ArticleCard = (articleProps: any) => {
  return (
    <div key={articleProps._id} className="flex flex-col">
      <div> { articleProps._id ? (
        <>
          <img src={articleProps.picture}/>
          <h3>{articleProps.name}</h3>
          <h3>{articleProps.grade}</h3>
          <h3>{articleProps.price}</h3>

          <div>
            <span>{articleProps.likers}</span>
            <span>{articleProps.dislikers}</span>
          </div>
          
        </>
      ) : ""
      }  
      </div>
    </div>
  )
}