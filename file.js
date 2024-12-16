// document.getElementById('yes').addEventListener('click', function() {
//     document.getElementById('response').textContent = "Yay! Aku juga suka kamu 🥰";
//   });

//   document.getElementById('no').addEventListener('click', function() {
//     document.getElementById('response').textContent = "Yah, gapapa. Kita bisa tetap jadi teman kok 😅";
//   });
document.getElementById('yes').addEventListener('click', function() {
    document.getElementById('response').textContent = "Yay! Aku juga suka kamu 🥰";
  });

  document.getElementById('no').addEventListener('mouseover', function() {
    const buttonNo = document.getElementById('no');
    const randomX = Math.floor(Math.random() * 300) - 150; // Random X position
    const randomY = Math.floor(Math.random() * 300) - 150; // Random Y position

    buttonNo.style.transform = `translate(${randomX}px, ${randomY}px)`;
  });
  document.getElementById('yes').addEventListener('click', function () {
    document.getElementById('response').textContent = "Yay! Aku juga suka kamu 🥰";
    setTimeout(() => {
      document.getElementById('response').textContent = "Apakah kamu ingin mendengar lagu?";
      const yesButton = document.createElement('button');
      yesButton.textContent = 'Iya';
      yesButton.style.marginTop = '20px';
      yesButton.style.padding = '10px 20px';
      yesButton.style.fontSize = '1.2rem';
      yesButton.style.backgroundColor = '#4caf50';
      yesButton.style.color = 'white';
      yesButton.style.border = 'none';
      yesButton.style.borderRadius = '5px';
      yesButton.style.cursor = 'pointer';
      
      document.body.appendChild(yesButton);

      yesButton.addEventListener('click', function () {
        // URL audio dan lirik
        const audioSrc = 'Natta Reza - Kekasih Impian _ Official Music Video.mp3';
        const lyrics = [
          { time: 27, text: "Aku tak pernah meminta" },
          { time: 33, text: "Sosok wanita sempurna" },
          { time: 40, text: "Cukup dia yang selalu" },
          { time: 45, text: "Mengerti akan diriku" }
        ];

        // Simpan ke localStorage
        localStorage.setItem('audioSrc', audioSrc);
        localStorage.setItem('lyrics', JSON.stringify(lyrics));

        // Pindah ke halaman kedua
        window.location.href = 'lagu.html';
      });
    }, 2000);
  });
