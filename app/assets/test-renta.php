<?php
/* abstract */ class Animal
{
//	abstract public function attack();

	/* private*/protected function _whoIs()
	{
		return 'I am a ';
	}

	public function eat($food)
	{
		return 'I love ' . $food;
	}
}


class Dog extends Animal
{
	public function saySomething()
	{
		return parent::_whoIs() . 'dog';
	}
}

$animal = new Animal();
echo $animal->eat('bones');

$dog = new Dog();
echo $dog->saySomething() . ' and ' . $dog->eat('bones');


$a = true;
$b = "true"; 
echo ($a == $b) ? 'OK' : 'KO';


/*

abstract class Animal
{
	abstract public function attack();	// Must be defined in the child classes

	private function _whoIs()			
	{
		return 'I am a ';
	}

	public function eat($food)
	{
		return 'I love ' . $food;
	}
}


class Dog extends Animal
{											// Missing: definition of function attack()
	public function saySomething()
	{
		return parent::_whoIs() . 'dog';	// Function "private", can't be called from here, must be set "protected" or "public"
	}
}

$animal = new Animal();						// Can not be instantiated because "abstract"
echo $animal->eat('bones');

$dog = new Dog();
echo $dog->saySomething() . ' and ' . $dog->eat('bones');
*/







