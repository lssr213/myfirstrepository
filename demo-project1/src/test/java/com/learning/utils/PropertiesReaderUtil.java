package com.learning.utils;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

public class PropertiesReaderUtil {

	// Here we are making PropertiesReaderUtil class a singleton class
	// Only one object gets created. which means constructor is called only once. which means properties are loaded only once
	private static PropertiesReaderUtil propertiesReaderUtil = null;
	
	
	private PropertiesReaderUtil() {
		Properties props = new Properties();
		try {
			props.load(new FileInputStream("conf/config.properties"));
			System.getProperties().putAll(props);
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	public static PropertiesReaderUtil getInstance() {
		if(propertiesReaderUtil == null) {
			propertiesReaderUtil = new PropertiesReaderUtil();
		}
		return propertiesReaderUtil;
	}
}
