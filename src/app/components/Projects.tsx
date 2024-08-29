const Projects = () => {
  return (
    <section id="projects" className="mb-16">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((project) => (
                <div
                    key={project}
                    className="border bg-background border-gray-800 rounded-lg p-4 hover:border-gray-600 transition-colors"
                >
                    <h3 className="text-xl font-semibold mb-2">
                        Project {project}
                    </h3>
                    <p className="text-gray-400">
                        A brief description of the project and the
                        technologies used.
                    </p>
                </div>
            ))}
        </div>
    </section>
  );
}

export default Projects