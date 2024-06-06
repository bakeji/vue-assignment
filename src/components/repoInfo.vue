<script setup>
import { inject } from 'vue'
import {useRoute} from 'vue-router'
const newRepo = inject('allRepos')
 const repoName = useRoute().params.id

 const selectedRepo = newRepo.value.find((repo) => repo.name === repoName)
 console.log(repoName)

</script>
<template>
            <div class="repo-info">
            <div class="repo-name">
                <h1>{{ selectedRepo.name }}</h1>
                <!-- <Link to={selectedRepo.clone_url}}><p>selectedRepo.clone_url</p></Link> -->
            </div>


            <div class="flex">
                <div class="flx-item">
                <p>Fork Count: {{selectedRepo.forks_count}}</p>
                <p>Disabled: {{selectedRepo.disabled}}</p>
                <p>Stargazers: {{selectedRepo.stargazers_count}}</p>
                <p>Date Created:{{selectedRepo.created_at}}</p>
                <p>open Issues:{{selectedRepo.open_issues}}</p>
                </div>
                
                <div class="flx-item">
                <p>Visibility:{{selectedRepo.visibility}}</p>
                <p>Language: {{selectedRepo.language}}</p>
                <p>Default Branch:{{selectedRepo.default_branch}}</p>
                <p>Archived: {{selectedRepo.archived}}</p>
                <p>Watchers: {{selectedRepo.watchers}}</p>

                </div>
            </div>
        </div>
    

</template>