// ── Scroll-triggered fade-up animations ──
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12 });
document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));

// ── Supabase Configuration ──
const supabaseUrl = 'https://uwnbrrbiyzzafhjoiwdj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV3bmJycmJpeXp6YWZoam9pd2RqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzczMDc0MTcsImV4cCI6MjA5Mjg4MzQxN30.6X7LIhxio7-qL3G-Z8tzVtpa8foSDsWsLkZDp70LcCo';
const _supabase = supabase.createClient(supabaseUrl, supabaseKey);

// ── Bootstrap .needs-validation form handler ──
(function () {
  'use strict';

  const form = document.getElementById('contactForm');

  form.addEventListener('submit', async function (event) {
    event.preventDefault();
    event.stopPropagation();

    form.classList.add('was-validated');

    if (form.checkValidity()) {
      const submitBtn = form.querySelector('.btn-submit');
      const originalBtnText = submitBtn.innerHTML;

      // Get form data
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      // Show loading state
      submitBtn.disabled = true;
      submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Submitting...';

      try {
        const { error } = await _supabase
          .from('submissions')
          .insert([data]);

        if (error) {
            console.error('Supabase Insertion Error:', error.message, error.details, error.hint);
            throw error;
        }

        console.log('Submission successful');

        // Success: show the in-page success message
        document.getElementById('formArea').style.display = 'none';
        document.getElementById('successMsg').style.display = 'block';
      } catch (err) {
        console.error('Supabase error:', err);
        alert('There was an error submitting your form. Please try again.');
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnText;
      }
    }
  });
})();

// ── Reset form state when modal is closed ──
document.getElementById('volunteerModal').addEventListener('hidden.bs.modal', function () {
  const form = document.getElementById('contactForm');
  form.reset();
  form.classList.remove('was-validated');
  document.getElementById('formArea').style.display = 'block';
  document.getElementById('successMsg').style.display = 'none';
});
