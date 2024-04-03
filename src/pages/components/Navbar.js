function ArticlePreview(props) {
  return (
    <div className="Navbar">
      <div className="flex items-center justify-between h-[10vh] p-5">
        <div className="flex items-center">
          <h1 className='font-serif font-bold text-4xl'>myMedium</h1>
          <span className="h-full mx-5">|</span>
          <p>Hello</p>
        </div>
        <a className="text-2xl" href="/"><ion-icon name="log-out-outline"></ion-icon></a>
      </div>
    </div>
  );
}

export default ArticlePreview;