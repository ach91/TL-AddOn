window.onload = function() {
  (() => {
    const defaultOption = {
      origin: 'right',
      distance: '3rem',
      scale: 1,
      delay: 300
    };
    window.sr = ScrollReveal(defaultOption);
    sr.reveal('.team-summary', 100);
    sr.reveal('.btn-wrapper', 100);
  })();

  (() => {
    const sidebar = document.getElementById('fixed-sidebar');
    sidebar.addEventListener('click', function() {
      if (this.classList.contains('collapsed')) {
        this.classList.add('mini');
        this.classList.remove('collapsed');
        this.classList.add('loading');
        const loaded = () => {
          showAll('.team-item-wrapper');
          showAll('.btn-wrapper');
          this.classList.remove('loading');
          this.classList.add('loaded');
          sr.sync();
        };
        setTimeout(loaded, 3000);
      } else if (
        this.classList.contains('mini') &&
        !this.classList.contains('loading')
      ) {
        this.classList.remove('mini');
        this.classList.add('open');
        // document.querySelectorAll('.team-item-wrapper').forEach(elem => {});
      } else if (this.classList.contains('open')) {
        this.classList.remove('open');
        this.classList.add('mini');
      }
    });

    document
      .getElementById('btn-extended')
      .addEventListener('click', function() {
        if (!sidebar.classList.contains('expanded')) {
          sidebar.className = '';
          sidebar.classList.add('expanded');
        } else {
          sidebar.className = '';
          sidebar.classList.add('open');
        }
      });
  })();
};

function showAll(target) {
  document.querySelectorAll(target).forEach(elem => {
    elem.classList.remove('hidden');
  });
}

function hideAll(target) {
  document.querySelectorAll(target).forEach(elem => {
    elem.classList.add('hidden');
  });
}
