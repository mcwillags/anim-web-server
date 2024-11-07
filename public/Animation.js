class SlideInAnimation {
    constructor({ duration }) {
      this.rotationAngle = 0;
      this.ballX = 30;
      this.ballY = 100;
      this.previousTimestamp = null;
      this.duration = duration;
      this._completed = false; 
    }
  
    proceed(context, timestamp) {
      this.calculateRemainingDuration(timestamp);
      context.clearRect(0, 0, 300, 150);
  
      if (this.previousTimestamp !== null) {
        const deltaTime = timestamp - this.previousTimestamp;
        this.ballX += (deltaTime / this.duration) * 300;
      }
  
      this.previousTimestamp = timestamp;
      this.rotationAngle += 4;
  
      context.save();
      context.translate(this.ballX, this.ballY);
      context.rotate((this.rotationAngle * Math.PI) / 180);
  
      const radius = 15;
      const gradient = context.createRadialGradient(0, 0, 0, 0, 0, radius);
      gradient.addColorStop(0, "#e65c00");
      gradient.addColorStop(1, "#803300");
  
      context.beginPath();
      context.arc(0, 0, radius, 0, Math.PI * 2);
      context.fillStyle = gradient;
      context.fill();
  
      context.strokeStyle = "#0d0d0d";
      context.lineWidth = 1.2;
  
      context.beginPath();
      context.moveTo(-radius * 0.5, 0);
      context.lineTo(radius * 0.5, 0);
      context.stroke();
  
      context.beginPath();
      context.moveTo(0, -radius * 0.5);
      context.lineTo(0, radius * 0.5);
      context.stroke();
  
      context.restore();
    }
  
    stop(context) {
      console.log(context);
    }
  
    get completed() {
      return this._completed;
    }
  
  }
  
  window.CustomAnimation = SlideInAnimation;