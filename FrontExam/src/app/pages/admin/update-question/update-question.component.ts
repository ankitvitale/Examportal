import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {
  public Editor = ClassicEditor;
  quesId=0;
  question;
  categories;
  constructor(private _route:ActivatedRoute,
    private _question:QuestionService,
    private _cat:CategoryService ,
    private _router:Router
    ) { }

  

  ngOnInit(): void {

    this.quesId=this._route.snapshot.params.quesid
   // alert(this.quesId);
    this._question.getQuestion(this.quesId).subscribe(
      (data:any)=>{
        this.question=data;
        console.log(this.question);
      },
      (error)=>{
        console.log(error);
      }
    );
    
  }
  //update fromSubmit
  public updateData(){
    this._question.updateQuestion(this.question).subscribe(
      (data:any)=>{
        Swal.fire('Success !!','quiz updated','success').then((e)=>{
          this._router.navigate(['/admin/quizzes']);
        });
      },
      (error)=>{
        Swal.fire('Error','error in Updating Quiz','error');
        console.log(error);
      }
    );
  }

  formSubmit() {
    if (this.question.content.trim() == '' || this.question.content == null) {
      return;
    }

    if (this.question.option1.trim() == '' || this.question.option1 == null) {
      return;
    }
    if (this.question.option2.trim() == '' || this.question.option2 == null) {
      return;
    }
    if (this.question.answer.trim() == '' || this.question.answer == null) {
      return;
    }

}

}

