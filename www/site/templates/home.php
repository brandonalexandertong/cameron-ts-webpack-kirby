<?php
/*
  Templates render the content of your pages.

  They contain the markup together with some control structures
  like loops or if-statements. The `$page` variable always
  refers to the currently active page.

  To fetch the content from each field we call the field name as a
  method on the `$page` object, e.g. `$page->title()`.

  This home template renders content from others pages, the children of
  the `photography` page to display a nice gallery grid.

  Snippets like the header and footer contain markup used in
  multiple templates. They also help to keep templates clean.

  More about templates: https://getkirby.com/docs/guide/templates/basics
*/
?>
<?php snippet('header') ?>
  <?php
  /*
    We always use an if-statement to check if a page exists to
    prevent errors in case the page was deleted or renamed before
    we call a method like `children()` in this case
  */
  ?>
  <div class= "cursor">
    <img src = "assets/images/(.svg" class = "cursor-parentheses cursor-parentheses-left">
    <div class = "cursor-copy-container">
      <p class = "cursor-top"></p>
      <p class = "cursor-bottom"></p>
    </div>   
    <img src = "assets/images/).svg" class = "cursor-parentheses cursor-parentheses-right">
  </div>
  <section class="bg-img-section">
    <?php if ($backgroundPage = page('background')): ?>
      <?php foreach ($backgroundPage->images()->sortBy('sort', 'filename') as $bgimage): ?>
        <div class="bg-img-div">
          <img class="bg-img" loading="lazy" src="<?= $bgimage->resize(2000,2000)->url() ?>">
        </div>
      <?php endforeach ?>
    <?php endif ?>
  </section>
  <section class="info-hero-section slide-up">
    <div class="info-container clear">
      <div class="info-section">
        <h3 class="about-h3 info-content">About</h3>
        <?php if ($infoPage = page('info')): ?>
        <p class="about-copy info-content"><?= $infoPage->about()->html() ?></p>
        <h3 class="selected-works-tag info-content">Selected Works</h3>
        <div class="selected-works-container info-content">
          <ul class="selected-works">

              <?php
              $columnOne = $infoPage->worksCol1()->toStructure();
              foreach ($columnOne as $columnItem): ?>
                <li><?= $columnItem->project()->html() ?></li>
              <?php endforeach ?>

          </ul>
        </div>

        <h3 class="contact-tag info-content">Contact</h3>
        <ul class="contact-list info-content">
          <li>
            <?= html::email($infoPage->email()) ?>
          </li>
          <li>
            <?= html::tel($infoPage->phone()) ?>
          </li>
          <?php
          $socialLinks = $infoPage->social()->toStructure();
          foreach ($socialLinks as $link): ?>
            <li>
              <a href="<?= $link->url() ?>"><?= $link->platform()->html() ?></a>
            </li>
          <?php endforeach ?>
        </ul>
        <p class="close-tag info-content">
          Close
        </p>
        <?php endif ?>
      </div>
    </div>
    <div class="hero-container">
      <div class="hero">
        <img src="assets/logos/Title_CJ-TS.svg" >
      </div>
      <div class="info-tag">
        <img src="assets/logos/Info_CJ-TS.svg" >
      </div>
    </div>
  </section>

  <section class="projects-section">



    <div class="projects-container off-screen">

      <?php if ($projects = page('projects')): ?>
        <?php if ($albums = $projects->children()->listed()->filterBy('template', 'album'))?>
        <?php foreach ($projects->children()->listed() as $project): ?>

          <?php if ($project->template() == 'album'): ?>
              <div class="album project">
                <?php if ($project->images()->count() > 1): ?>
                  <div class = "prev" onclick="plusSlides(-1, <?= $project->indexOf() ?>)" onmouseenter="changeCursor(`<?= $project->projectName() ?>`, `&#8592;<?= $project->projectInfo() ?>`)" onmouseleave="removeCursor()">
                  </div>
                  <div class = "next" onclick="plusSlides(1, <?= $project->indexOf() ?>)" onmouseenter="changeCursor(`<?= $project->projectName() ?>`, `<?= $project->projectInfo() ?> &#8594;`)" onmouseleave="removeCursor()">
                  </div>
                <?php else: ?>
                  <div class = "prev" onclick="plusSlides(-1, <?= $project->indexOf() ?>)" onmouseenter="changeCursor(`<?= $project->projectName() ?>`, `<?= $project->projectInfo() ?>`)" onmouseleave="removeCursor()">
                  </div>
                  <div class = "next" onclick="plusSlides(1, <?= $project->indexOf() ?>)" onmouseenter="changeCursor(`<?= $project->projectName() ?>`, `<?= $project->projectInfo() ?>`)" onmouseleave="removeCursor()">
                  </div>
                <?php endif ?>

                <?php foreach ($project->images() as $picture): ?>
                 <img class="visible-image" loading="lazy" src = "<?= $picture->resize(1000,1000)->url() ?>">
                <?php endforeach ?>
                <?php if ($firstPicture = $project->image()): ?>
                  <img class="blurred-image" src = "<?= $firstPicture->resize(2000,2000)->url() ?>">
                <?php endif ?>
              </div>
          <?php else: ?>
            <!-- <iframe class="video project"src="https://player.vimeo.com/video/<?= $project->vimeoId() ?>" width="640" height="468" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe> -->
            <div class="o-ratio-16-9 project video">
                <div class="vimeo-player" id ="test-video-id" data-vimeo="<?= $project->vimeoId() ?>" onmouseenter="changeCursor(`<?= $project->projectName() ?>`, `<?= $project->projectInfo() ?>`)" onmouseleave="removeCursor()">
                    <div class="vimeo-player__ui">
                        <button class="vimeo-player__play">Play</button>
                        <button class="vimeo-player__pause">Pause</button>
                        <div class="vimeo-player__seek">0:00</div>
                        <button class="vimeo-player__mute icon">
                            <img src="assets/icons/volume.png" alt="Mute">
                        </button>
                        <button class="vimeo-player__maximize icon">
                            <img src="assets/icons/fullscreen.png" alt="Maximize">
                        </button>
                    </div>
                    <div class="vimeo-player__progress"></div>
                </div>
            </div>
          <?php endif ?>
        <?php endforeach ?>
      <?php endif ?>
     </div>

  </section>

<?php snippet('footer') ?>
