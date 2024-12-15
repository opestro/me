<template>
  <div class="min-h-screen bg-[#020314] text-white">
    <!-- Hero Section -->
    <section class="relative h-screen flex items-center justify-center overflow-hidden">
      <!-- Galaxy Background Effect -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-[#020314] to-[#020314]"></div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(24,59,170,0.1),transparent_50%)]"></div>
        
        <!-- Animated Stars -->
        <div class="stars"></div>
        <div class="stars2"></div>
        <div class="stars3"></div>
        
        <!-- Technical Grid Background -->
        <div class="absolute inset-0 bg-[linear-gradient(rgba(2,3,20,0.8)_2px,transparent_2px),linear-gradient(90deg,rgba(2,3,20,0.8)_2px,transparent_2px)] bg-[size:50px_50px] opacity-20"></div>

        <!-- Mars Planet -->
        <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <!-- Planet Body -->
          <div class="relative w-[500px] h-[500px]">
            <!-- Main Planet Sphere -->
            <div class="absolute inset-0 rounded-full bg-gradient-to-br from-red-800 via-red-600 to-red-900
                        shadow-[inset_-20px_-20px_100px_rgba(0,0,0,0.7)]
                        animate-float-slow">
              <!-- Surface Details -->
              <div class="absolute inset-0 rounded-full bg-[url('/mars-texture.jpg')] bg-cover opacity-90 mix-blend-overlay"></div>
              
              <!-- Atmosphere Glow -->
              <div class="absolute -inset-8 rounded-full bg-red-500/10 blur-2xl"></div>
              
              <!-- Technical Details Overlay -->
              <div class="absolute inset-0 rounded-full overflow-hidden">
                <!-- Technical Scan Lines -->
                <div class="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(59,130,246,0.1)_3px)] opacity-30"></div>
                
                <!-- Technical Data Points -->
                <div class="absolute top-1/4 left-1/4 w-16 h-16">
                  <div class="absolute inset-0 border border-blue-500/30 rounded-full animate-ping-slow"></div>
                  <div class="absolute inset-0 border border-blue-400/20 rounded-full"></div>
                </div>
                
                <div class="absolute bottom-1/3 right-1/4 w-20 h-20">
                  <div class="absolute inset-0 border border-blue-500/30 rounded-full animate-ping-slow delay-1000"></div>
                  <div class="absolute inset-0 border border-blue-400/20 rounded-full"></div>
                </div>
              </div>
            </div>

            <!-- Orbital Data Ring -->
            <div class="absolute -inset-16 rounded-full border border-blue-500/20 
                        transform -rotate-45 animate-spin-very-slow">
              <!-- Technical Data Points -->
              <div class="absolute top-0  left-1/2 -translate-x-1/2 bg-blue-500/20 px-4 py-1 rounded-full text-xs backdrop-blur-sm">
                NGINX: Active
              </div>
              <div class="absolute bottom-0 left-1/2 -translate-x-1/2 bg-blue-500/20 px-4 py-1 rounded-full text-xs backdrop-blur-sm">
                Docker: Running
              </div>
              <div class="absolute left-0  top-1/2 -translate-y-1/2 bg-blue-500/20 px-4 py-1 rounded-full text-xs backdrop-blur-sm">
                K8s: Healthy
              </div>
              <div class="absolute right-0 top-1/2 -translate-y-1/2 bg-blue-500/20 px-4 py-1 rounded-full text-xs backdrop-blur-sm">
                CI/CD: Deployed
              </div>
            </div>

            <!-- Technical Metrics Ring -->
            <div class="absolute -inset-32 rounded-full border border-blue-500/10 
                        transform rotate-12 animate-spin-very-slow-reverse">
              <div class="absolute h-full w-full animate-spin-very-slow">
                <div class="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-2 bg-blue-500/50"></div>
                <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-2 bg-blue-500/50"></div>
                <div class="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-1 bg-blue-500/50"></div>
                <div class="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-1 bg-blue-500/50"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Content -->
      <div class="container mx-auto px-6 z-20">
        <div class="text-center relative max-w-3xl mx-auto mt-[60vh]">
          <div class="absolute inset-0 bg-blue-500/20 blur-3xl transform scale-y-50 scale-x-75"></div>
          
          <h1 class="text-7xl font-bold tracking-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-300 via-blue-500 to-blue-200 relative z-10">
            Mehdi Harzallah
          </h1>
          
          <p class="text-2xl text-blue-100 mb-8 font-light">
            DevOps Engineer & MEVN Stack Developer
          </p>
          
          <div class="flex justify-center gap-6">
            <a href="mailto:mehdi.h@nestgit.com" 
               class="group relative px-8 py-4 overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]">
              <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span class="relative z-10">Get in touch</span>
            </a>
            
            <a href="#work" 
               class="group px-8 py-4 rounded-full border border-blue-500/30 hover:border-blue-400 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.15)]">
              <span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-blue-500">View Work</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-20 relative">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-12 text-center">Technical Expertise</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- DevOps Card -->
          <div class="bg-white/5 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/10 transition-all">
            <h3 class="text-xl font-semibold mb-4">DevOps & Infrastructure</h3>
            <ul class="space-y-2 text-gray-300">
              <li>Docker & Kubernetes</li>
              <li>Nginx & Traefik</li>
              <li>AWS, DigitalOcean, OVH</li>
              <li>CI/CD Pipelines</li>
            </ul>
          </div>

          <!-- Frontend Card -->
          <div class="bg-white/5 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/10 transition-all">
            <h3 class="text-xl font-semibold mb-4">Frontend Development</h3>
            <ul class="space-y-2 text-gray-300">
              <li>Nuxt.js (2/3)</li>
              <li>Vue.js & Pinia</li>
              <li>Tailwind CSS & Vuetify</li>
              <li>Responsive Design</li>
            </ul>
          </div>

          <!-- Backend Card -->
          <div class="bg-white/5 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/10 transition-all">
            <h3 class="text-xl font-semibold mb-4">Backend Development</h3>
            <ul class="space-y-2 text-gray-300">
              <li>Node.js & Express</li>
              <li>MongoDB</li>
              <li>JWT Authentication</li>
              <li>RESTful APIs</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Experience Section -->
    <section class="py-20 relative bg-white/5">
      <div class="container mx-auto px-6">
        <h2 class="text-3xl font-bold mb-12 text-center">Work Experience</h2>
        <div class="space-y-8">
          <div v-for="(job, index) in recentJobs" :key="index" 
               class="bg-white/5 backdrop-blur-lg rounded-2xl p-6 hover:bg-white/10 transition-all">
            <h3 class="text-xl font-semibold">{{ job.position }}</h3>
            <p class="text-purple-400">{{ job.company }}</p>
            <p class="text-gray-400 mt-2">{{ job.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-8">Let's Connect</h2>
        <div class="flex justify-center gap-6">
          <a href="https://www.linkedin.com/in/mehdi-harzallah-24a535225/" 
             class="bg-white/10 p-4 rounded-full hover:bg-white/20 transition-all">
            <span class="sr-only">LinkedIn</span>
            <!-- LinkedIn Icon -->
          </a>
          <a href="https://github.com/opestro" 
             class="bg-white/10 p-4 rounded-full hover:bg-white/20 transition-all">
            <span class="sr-only">GitHub</span>
            <!-- GitHub Icon -->
          </a>
          <a href="mailto:mehdi.h@nestgit.com" 
             class="bg-white/10 p-4 rounded-full hover:bg-white/20 transition-all">
            <span class="sr-only">Email</span>
            <!-- Email Icon -->
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const recentJobs = [
  {
    position: "DevOps Designer",
    company: "Da3em",
    description: "Creating and managing scalable server architectures to optimize resource usage and reduce costs."
  },
  {
    position: "DevOps Manager",
    company: "D&D Consulting",
    description: "Implemented advanced DevOps architectures for Odoo, developing automated deployment systems."
  },
  {
    position: "DevOps Engineer & Web Developer",
    company: "FeeeF",
    description: "Created scalable infrastructure for web applications with focus on responsive design."
  }
];
</script>

<style scoped>
/* Star animations */
.stars, .stars2, .stars3 {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: transparent;
  box-shadow: generate-stars(200); /* You'll need to implement this with actual box-shadow values */
  animation: animateStars 50s linear infinite;
}

.stars2 {
  animation-delay: -5s;
}

.stars3 {
  animation-delay: -10s;
}

@keyframes animateStars {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-1000px);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-float-delayed {
  animation: float 8s ease-in-out infinite;
  animation-delay: -4s;
}

/* Add smooth scroll behavior */
html {
  scroll-behavior: smooth;
}

@keyframes spin-very-slow {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes spin-very-slow-reverse {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}

@keyframes float-debris {
  0%, 100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-10px, -10px);
  }
}

@keyframes float-debris-delayed {
  0%, 100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(10px, -15px);
  }
}

.animate-spin-very-slow {
  animation: spin-very-slow 20s linear infinite;
}

.animate-spin-very-slow-reverse {
  animation: spin-very-slow-reverse 30s linear infinite;
}

.animate-float-slow {
  animation: float 15s ease-in-out infinite;
}

.animate-float-debris {
  animation: float-debris 8s ease-in-out infinite;
}

.animate-float-debris-delayed {
  animation: float-debris-delayed 12s ease-in-out infinite;
}
</style>
