import { Component } from '@angular/core';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  demoUrl: string;
  githubUrl: string;
  featured: boolean;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Dashboard',
      description: 'A comprehensive dashboard for e-commerce businesses with sales analytics, inventory management, and customer insights.',
      image: 'assets/images/project1.jpg',
      technologies: ['Angular', 'NgRx', 'Chart.js', 'Node.js', 'MongoDB'],
      demoUrl: 'https://example.com/demo1',
      githubUrl: 'https://github.com/username/ecommerce-dashboard',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, task assignments, and progress tracking.',
      image: 'assets/images/project2.jpg',
      technologies: ['React', 'Redux', 'Firebase', 'Material-UI'],
      demoUrl: 'https://example.com/demo2',
      githubUrl: 'https://github.com/username/task-management',
      featured: true
    },
    {
      id: 3,
      title: 'Fitness Tracker',
      description: 'A fitness tracking application with workout plans, progress charts, and nutrition tracking features.',
      image: 'assets/images/project3.jpg',
      technologies: ['Angular', 'NgRx', 'Node.js', 'Express', 'MongoDB'],
      demoUrl: 'https://example.com/demo3',
      githubUrl: 'https://github.com/username/fitness-tracker',
      featured: true
    },
    {
      id: 4,
      title: 'Weather Forecast App',
      description: 'A weather forecast application with location-based weather data, 7-day forecasts, and weather alerts.',
      image: 'assets/images/project4.jpg',
      technologies: ['Vue.js', 'Vuex', 'OpenWeatherMap API', 'SCSS'],
      demoUrl: 'https://example.com/demo4',
      githubUrl: 'https://github.com/username/weather-app',
      featured: false
    },
    {
      id: 5,
      title: 'Recipe Finder',
      description: 'A recipe finder application with search functionality, filtering options, and user-generated recipes.',
      image: 'assets/images/project5.jpg',
      technologies: ['React', 'Context API', 'Firebase', 'Styled Components'],
      demoUrl: 'https://example.com/demo5',
      githubUrl: 'https://github.com/username/recipe-finder',
      featured: false
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing my projects, skills, and experience.',
      image: 'assets/images/project6.jpg',
      technologies: ['Angular', 'TypeScript', 'SCSS', 'AOS'],
      demoUrl: 'https://example.com/demo6',
      githubUrl: 'https://github.com/username/portfolio',
      featured: false
    }
  ];
  
  activeFilter: string = 'all';
  
  filterProjects(filter: string): void {
    this.activeFilter = filter;
  }
  
  get filteredProjects(): Project[] {
    if (this.activeFilter === 'all') {
      return this.projects;
    }
    
    return this.projects.filter(project => 
      project.technologies.some(tech => 
        tech.toLowerCase().includes(this.activeFilter.toLowerCase())
      )
    );
  }
} 