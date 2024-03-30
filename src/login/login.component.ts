import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [FormsModule, CommonModule],
    templateUrl: './login.component.html',
    styleUrl: './login.component.css',
})
export class LoginComponent {
    public name: string;
    public user: { login; password } = {} as { login; password };

    constructor(private http: HttpClient) { }

    public login(): void {
        let response = this.http
            .post('https://workoutcreator.bsite.net/api/user/login', {
                login: this.user.login,
                password: this.user.password,
            })
            .subscribe((x) => {
                this.name = (x as any).name;
            });
    }
}
