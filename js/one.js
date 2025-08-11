       
                  //index.html
       // تنبيه عند الضغط على قراءة المزيد
       
        // document.querySelectorAll('.btn-primary').forEach(button => {
        //     button.addEventListener('click', function(e) {
        //         e.preventDefault();
        //         alert('هذه مجرد واجهة تجريبية، سيتم توجيهك إلى الخبر الكامل في النسخة الحية.');
        //     });
        // });
        
        
        // تأثيرات للبطاقات عند التمرير
        // window.addEventListener('scroll', function() {
        //     const cards = document.querySelectorAll('.news-card');
        //     cards.forEach(card => {
        //         const cardPosition = card.getBoundingClientRect().top;
        //         const screenPosition = window.innerHeight / 1.2;
                
        //         if(cardPosition < screenPosition) {
        //             card.style.opacity = '1';
        //             card.style.transform = 'translateY(0)';
        //         }
        //     });
        // });
        
        // تهيئة البطاقات للظهور تدريجياً
        // document.addEventListener('DOMContentLoaded', function() {
        //     const cards = document.querySelectorAll('.news-card');
        //     cards.forEach((card, index) => {
        //         card.style.opacity = '0';
        //         card.style.transform = 'translateY(30px)';
        //         card.style.transition = 'all 0.6s ease';
        //         card.style.transitionDelay = (index * 0.1) + 's';
        //     });
            
        //     setTimeout(() => {
        //         window.dispatchEvent(new Event('scroll'));
        //     }, 300);
        // });