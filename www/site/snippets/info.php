
<section class="info-hero-section slide-up">
  <div class="info-container clear">
    <div class="info-section">
      <h3 class="about-h3 info-content">About</h3>
      <?php if ($infoPage = page('info')) : ?>
        <p class="about-copy info-content"><?= $infoPage->about()->html() ?></p>
        <h3 class="selected-works-tag info-content">Selected Clients</h3>
        <div class="selected-works-container info-content">
          <ul class="selected-works">

            <?php
            $columnOne = $infoPage->worksCol1()->toStructure();
            foreach ($columnOne as $columnItem) : ?>
              <li><?= $columnItem->project()->html() ?></li>
            <?php endforeach ?>

          </ul>
        </div>

        <h3 class="contact-tag info-content">Contact</h3>
        <ul class="contact-list info-content">

         <?php if ($infoPage->email()->isNotEmpty()) : ?>
            <li>
              <?= html::email($infoPage->email()) ?>
            </li>
          <?php endif ?>

          <?php if ($infoPage->emailAlt()->isNotEmpty()) : ?>
            <li>
              <?= html::email($infoPage->emailAlt()) ?>
            </li>
          <?php endif ?>

          <?php if ($infoPage->phone()->isNotEmpty()) : ?>
            <li>
              <?= html::tel($infoPage->phone()) ?>
            </li>
          <?php endif ?>

          <?php
          $socialLinks = $infoPage->social()->toStructure();
          foreach ($socialLinks as $link) : ?>
            <li>
              <a href="<?= $link->url() ?>"><?= $link->platform()->html() ?></a>
            </li>
          <?php endforeach ?>
        </ul>
        <button class="close-tag info-content">Close</button>
        
      <?php endif ?>
        <div class="credits">
            <div class="design">
              <h4>site design:</h4>
              <a href="http://jacobtruax.info/" target="=_blank">jacob truax</a>
            </div>
            <div class="development">
              <h4>development:</h4>
              <a href="https://brandontong.info/" target="=_blank">brandon tong</a>
            </div>
        </div>
    </div>
  </div>
</section>

<img class="hero-tag tidball-tag-desktop" alt="Desktop Logo Saying 'Cameron Tidball Sciullo'" src="assets/logos/Cameron+Tidball_desktop.svg">
<img class="hero-tag tidball-tag-mobile" alt="Mobile Logo Saying 'Cameron Tidball Sciullo'" src="assets/logos/Cameron+Tidball_mobile.svg">
<button class="info-tag">
  <img class="info-button" tabindex="0" alt="Info Button" src="assets/logos/Info_CJ-TS.svg"> 
</button>

<div class="scroll-tag-container">
  <img id="scroll-tag" alt="Image telling user to scroll" src="assets/images/scroll.svg">
</div>
