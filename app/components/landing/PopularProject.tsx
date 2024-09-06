const PopularProjects = () => {
    const projects = [
      {
        id: 1,
        title: 'AI-Based Fraud Detection System',
        description: 'A system to detect fraud in real-time using AI and machine learning.',
        image: '/images/project1.png',
      },
      {
        id: 2,
        title: 'Smart Home Automation',
        description: 'A project to automate home appliances with IoT and AI.',
        image: '/images/project2.png',
      },
      {
        id: 3,
        title: 'Healthcare Scheduling System',
        description: 'A platform to manage and schedule healthcare appointments.',
        image: '/images/project3.png',
      },
    ];
  
    return (
      <section className="py-12 bg-light-900 dark:bg-dark-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-bold text-dark-300 dark:text-light-900 mb-8">
          Popular Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group bg-light-800 dark:bg-dark-300 p-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-primary-500 dark:text-light-900">
                {project.title}
              </h3>
              <p className="text-dark-300 dark:text-light-400 mt-2">
                {project.description}
              </p>

              {/* Hover effect: Explore button */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                <a
                  href="#"
                  className="bg-primary-500 text-white px-4 py-2 rounded-lg text-sm font-bold"
                >
                  Explore
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    );
  };
  
export default PopularProjects;  