
        let currentFontSize = 16;
        let colorSchemeIndex = 0;
    
        function increaseFontSize() {
            currentFontSize += 2;
            document.body.style.fontSize = currentFontSize + 'px';
        }
    
        function resetFontSize() {
            currentFontSize = 16;
            document.body.style.fontSize = currentFontSize + 'px';
        }
    
        function decreaseFontSize() {
            if (currentFontSize > 10) {
                currentFontSize -= 2;
                document.body.style.fontSize = currentFontSize + 'px';
            }
        }
    
        function toggleMenu() {
            let menu = document.getElementById('hamburgerMenu');
            let icon = document.getElementById('hamburgerIcon');
    
            if (menu.style.display === 'inline-block') {
                menu.style.display = 'none';
                icon.classList.remove('active');
            } else {
                menu.style.display = 'inline-block';
                icon.classList.add('active');
            }
        }

        

        function changeColor(color) {
            // รีเซ็ตการเปลี่ยนสีทั้งหมด
            document.getElementById('blackButton').classList.remove('active');
            document.getElementById('whiteButton').classList.remove('active');
            document.getElementById('yellowButton').classList.remove('active');

            switch (color) {
                case 'black':
                    document.querySelectorAll('.switch-color').forEach(element => {
                        element.style.backgroundColor = '';
                        element.style.background = '';
                        element.style.color = '';
                        document.querySelector('header').style.background = 'linear-gradient(to right, #FFD700, #FFA500)';
                    });
                    break;
                case 'white':
                    // รีเซ็ตสีและพื้นหลังเป็นสีหน้าหลัก
                    document.querySelectorAll('.switch-color').forEach(element => {
                        element.style.backgroundColor = '#121350';
                        element.style.background = '#121350';
                        element.style.color = 'white';
                        document.querySelector('header').style.background = '#121350';
                    });
                    break;
                case 'yellow':
                    document.querySelectorAll('.switch-color').forEach(element => {
                        element.style.backgroundColor = 'black';
                        element.style.background = 'black';
                        element.style.color = 'yellow';
                        document.querySelector('header').style.background = 'linear-gradient(to right, #000, #000)';
                    });
                    break;
                default:
                    break;
            }
        
            // เพิ่มคลาส active ที่ปุ่มที่เลือก
            document.getElementById(color + 'Button').classList.add('active');
        }
