function ArticlePreview(props) {
  return (
    <div className="Navbar">
      <div className="h-[10vh] p-5">
        <div className="flex items-center">
          <h1 className='font-serif font-bold text-4xl'>myMedium</h1>
          <span className="h-full mx-5">|</span>
          <p>Hello</p>
        </div>
        <ion-icon name="log-out-outline"></ion-icon>
      </div>
    </div>
  );
}

export default ArticlePreview;