package com.example.testgradleproject

import androidx.test.espresso.Espresso.onView
import androidx.test.espresso.action.ViewActions.click
import androidx.test.espresso.action.ViewActions.closeSoftKeyboard
import androidx.test.espresso.action.ViewActions.typeText
import androidx.test.espresso.assertion.ViewAssertions.matches
import androidx.test.espresso.matcher.ViewMatchers.withId
import androidx.test.espresso.matcher.ViewMatchers.withText
import androidx.test.ext.junit.rules.ActivityScenarioRule
import androidx.test.ext.junit.runners.AndroidJUnit4

import org.junit.Test
import org.junit.runner.RunWith

import org.junit.Assert.*
import org.junit.Rule

@RunWith(AndroidJUnit4::class)
class LoginActivityTest {

    @get:Rule
    val activityRule = ActivityScenarioRule(LoginActivity::class.java)

    @Test
    fun testLoginFlow() {
        // Type text in username field
        onView(withId(R.id.et_username))
            .perform(typeText("testuser"), closeSoftKeyboard())

        // Click login button
        onView(withId(R.id.btn_login))
            .perform(click())

        // Verify greeting text
        onView(withId(R.id.tv_greeting))
            .check(matches(withText("Welcome testuser!")))
    }

    // test should fail
    @Test
    fun testLoginIncorrect() {
        // Verify greeting text
        onView(withId(R.id.tv_greeting))
            .check(matches(withText("Welcome testuser!")))
    }
}