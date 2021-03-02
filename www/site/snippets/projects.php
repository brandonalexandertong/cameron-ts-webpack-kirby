
<section class="projects-section --hide-right">
  <div class="projects-container">
    <?php if ($projects = page('projects')) : ?>
      <?php foreach ($projects->children()->listed() as $project) : ?>
        <?php if ($project->blueprint()->title() == 'Album') : ?>
          <?php snippet('album', [
            'project' => $project
          ]) ?>
        <?php else : ?>
          <?php snippet('video', [
            'project' => $project
          ]) ?>
        <?php endif ?>
      <?php endforeach ?>
    <?php endif ?>
  </div>

</section>