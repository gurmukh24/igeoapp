package com.igeo.app;

import org.apache.cordova.DroidGap;



import android.os.Bundle;

public class Main extends DroidGap {
	@Override
	public void onCreate(Bundle savedInstanceState) {
		super.onCreate(savedInstanceState);
		super.setIntegerProperty("splashscreen", R.drawable.splash_screen);
		super.loadUrl("file:///android_asset/www/login.html",5000);
	}

	
}