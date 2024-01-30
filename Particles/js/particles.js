const particles = [];

function setup() {
  var canvas = createCanvas(window.innerWidth, window.innerHeight);

  const particlesNumber = Math.floor(window.innerWidth / 10);
  for (let i = 0; i <= particlesNumber; i++) {
    particles.push(new Particle());
  }
}

function draw() {
  ellipse(50, 50, 80, 80);
  background(33, 36, 61);

  particles.forEach((p, index) => {
    if (index < 30) {
      p.update();
      p.draw("rgba(255, 124, 124,0.6)");
    } else if (index < 60) {
      p.update();
      p.draw("rgba(255, 208, 130,0.6)");
    } else if (index < 90) {
      p.update();
      p.draw("rgba(136, 225, 242 ,0.6)");
    } else {
      p.update();
      p.draw("rgba(255, 225, 255 ,0)");
    }
    // p.checkParticles(particles.slice(index));
  });
}

class Particle {
  constructor() {
    this.position = createVector(random(width), random(height));
    this.size = 121;
    this.velocity = createVector(random(-2, 2), random(-2, 2));
  }

  //   draw single Particle
  draw(color) {
    noStroke();
    fill(color);
    circle(this.position.x, this.position.y, this.size);
  }

  //   update movement by adding velocity
  update() {
    this.position.add(this.velocity);
    this.edges();
  }

  //   Detect edges
  edges() {
    if (this.position.x < 0 || this.position.x > width) {
      this.velocity.x *= -1;
    }
    if (this.position.y < 0 || this.position.y > height) {
      this.velocity.y *= -1;
    }
  }
  // connect particles
  checkParticles(particles) {
    particles.forEach(particle => {
      const d = dist(
        this.position.x,
        this.position.y,
        particle.position.x,
        particle.position.y
      );
      if (d < 60) {
        stroke("rgba(255,255,255,0.01");
        line(
          this.position.x,
          this.position.y,
          particle.position.x,
          particle.position.y
        );
      }
    });
  }
}
