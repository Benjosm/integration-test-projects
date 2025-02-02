package com.example.testgradleproject

import android.os.Bundle
import android.widget.Button
import android.widget.EditText
import android.widget.TextView
import androidx.appcompat.app.AppCompatActivity
import com.example.testgradleproject.R.*

class LoginActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(layout.activity_login)

        findViewById<Button>(id.btn_login).setOnClickListener {
            val username = findViewById<EditText>(id.et_username).text.toString()
            findViewById<TextView>(id.tv_greeting).text = "Welcome $username!"
        }
    }
}