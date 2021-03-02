<section class="bg-img-section">
  <?php if ($backgroundPage = page('background')) : ?>
    <?php 
      $ind = 0;
      foreach ($backgroundPage->images()->sortBy('sort', 'filename') as $bgimage) : ?>
      <div class="bg-img-div">
        <img 
          <?php if ($ind == 0 ): ?>
            alt="<?= $bgimage->alt() ?>"
            class="bg-img" 
            srcset="<?= $bgimage->srcset('image') ?>"
            src="<?= $bgimage->resize(2000, 2000)->url() ?>"
          <?php else: ?>
            alt="<?= $bgimage->alt() ?>"
            class="bg-img lazyload" 
            data-srcset="<?= $bgimage->srcset('image') ?>"
            data-src="<?= $bgimage->resize(2000, 2000)->url() ?>"
          <?php endif; ?>
        >
      </div>
    <?php 
      $ind++;
    endforeach ?>
  <?php endif ?>
</section>