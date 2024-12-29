// services/BackgroundAnimation.jsx
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const colors = ["#c7222980", "#77509080", "#45487a80", "#169e4480"];

export default function BackgroundAnimation({ isExpanded }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particles = [];

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 5 + 1;
        this.baseSpeedX = Math.random() * 3 - 1.5;
        this.baseSpeedY = Math.random() * 3 - 1.5;
        this.speedX = this.baseSpeedX;
        this.speedY = this.baseSpeedY;
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        // Adjust speed based on expanded state
        this.speedX = this.baseSpeedX * (isExpanded ? 0.3 : 1);
        this.speedY = this.baseSpeedY * (isExpanded ? 0.3 : 1);

        this.x += this.speedX;
        this.y += this.speedY;

        if (this.size > 0.2) this.size -= 0.1;

        if (this.x < 0 || this.x > canvas.width) {
          this.speedX *= -1;
          this.baseSpeedX *= -1;
        }
        if (this.y < 0 || this.y > canvas.height) {
          this.speedY *= -1;
          this.baseSpeedY *= -1;
        }
      }

      draw() {
        ctx.fillStyle = isExpanded
          ? this.color.replace("80", "40") // Reduce opacity when expanded
          : this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function init() {
      particles = [];
      for (let i = 0; i < 50; i++) {
        particles.push(new Particle());
      }
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
      }
      requestAnimationFrame(animate);
    }

    init();
    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      // Clean up animation frame
      const highestId = requestAnimationFrame(() => {
        for (let i = 0; i < highestId; i++) {
          cancelAnimationFrame(i);
        }
      });
    };
  }, [isExpanded]);

  return (
    <motion.canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 transition-opacity duration-500"
      animate={{
        opacity: isExpanded ? 0.5 : 1,
      }}
      transition={{ duration: 0.5 }}
    />
  );
}
