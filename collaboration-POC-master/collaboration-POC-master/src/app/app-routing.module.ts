import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TrendsComponent } from './trends/trends.component';
import { MyTasksComponent } from './my-tasks/my-tasks.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './helpers/auth.guard';
import { AutomateIdeasComponent } from './automate-ideas/automate-ideas.component';
import { QuestionsComponent } from './questions/questions.component';
import { AutomationScoreComponent } from './automation-score/automation-score.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { PostsComponent } from './posts/posts.component';
import { FollowIdeasComponent } from './follow-ideas/follow-ideas.component';
import { DiscussionPostsTrendsComponent } from './discussion-posts-trends/discussion-posts-trends.component';
import { HomePageComponent } from './home-page/home-page.component';
import { SearchComponent } from './search/search.component';
import { CreatePostComponent } from './create-post/create-post.component';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "signin", component: LoginComponent },
  {path: "signup", component: RegisterComponent },
  {path: "home", component: HomePageComponent },
  {path: "automateIdeas", component: AutomateIdeasComponent },
  {path: "questions", component: QuestionsComponent },
  {path: "trends", component: TrendsComponent },
  {path: "discussionPostsTrends", component: DiscussionPostsTrendsComponent },
  {path: "my-tasks", component: MyTasksComponent },
  {path: "automationScore", component: AutomationScoreComponent },
  {path: "profile", component: MyprofileComponent },
  {path: "posts", component: PostsComponent },
  {path: "followideas", component: FollowIdeasComponent },
  {path: "search", component: SearchComponent},
  {path: "createPost", component: CreatePostComponent},

// 1st approach otherwise redirect to home
  { path: "**", redirectTo: "" }
// 2nd approach
//  {path: "", pathMatch: "full",redirectTo: "deployfirewalls"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
