const FeatureHighlights = () => {
    return (
      <section className="py-12 bg-light-800 dark:bg-dark-400">
        <h2 className="text-center text-2xl font-bold text-dark-300 dark:text-light-900 mb-8">
          Feature Highlights
        </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
    <div className="p-4">
      <img src="/icons/idea.png" alt="Post Ideas" className="mx-auto" />
      <h3 className="text-primary-500 dark:text-light-900 text-lg">Post Ideas</h3>
      <p className="text-dark-300 dark:text-light-400">Share your ideas and get feedback.</p>
    </div>
    <div className="p-4">
      <img src="/icons/collaborate.png" alt="Collaborate & Build" className="mx-auto" />
      <h3 className="text-primary-500 dark:text-light-900 text-lg">Collaborate & Build</h3>
      <p className="text-dark-300 dark:text-light-400">Work with mentors and build a team.</p>
    </div>
    <div className="p-4">
      <img src="/icons/fund.png" alt="Get Funded" className="mx-auto" />
      <h3 className="text-primary-500 dark:text-light-900 text-lg">Get Funded</h3>
      <p className="text-dark-300 dark:text-light-400">Connect with investors for funding.</p>
    </div>
  </div>
</section>
    );
  };
 
export default FeatureHighlights;