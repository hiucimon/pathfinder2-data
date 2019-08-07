#!/usr/bin/env perl
my (@args)=@ARGV;
for (@args) {
    if (!-d "src/modules/$_") {
        mkdir "src/modules/$_";
        cont($_);
        service($_);
        module($_);
        data($_);
    } else {
        print("Cannot create $_, already exists\n");
    }
}

sub service() {
    $name=$args[0];
    $cam=ucfirst($name);
    $out="src/modules/$name/$name.service.ts";
    open(OUT,'>',"$out") or die "Error writting to $out";
    print OUT <<EOF;
import { Injectable } from '\@nestjs/common';
import { data } from './$name.data';
\@Injectable()
export class ${cam}Service {
  getAttr(): any {
    return data;
  }
}
EOF
    close OUT;
}

sub data() {
    $name=$args[0];
    $cam=ucfirst($name);
    $out="src/modules/$name/$name.data.ts";
    open(OUT,'>',"$out") or die "Error writting to $out";
    print OUT <<EOF;
export const data = [
    1, 2,
];
EOF
    close OUT;
}

sub module() {
    $name=$args[0];
    $cam=ucfirst($name);
    $out="src/modules/$name/$name.module.ts";
    open(OUT,'>',"$out") or die "Error writting to $out";
    print OUT <<EOF;
import { Module } from '\@nestjs/common';
import { ${cam}Controller } from './$name.controller';
import { ${cam}Service } from './$name.service';

\@Module({
  imports: [],
  controllers: [${cam}Controller],
  providers: [${cam}Service],
})
export class ${cam}Module {}
EOF
    close OUT;
    print "Add --->import { ${cam}Module } from './modules/$name/$name.module';<--- to your app.module.ts\n";

}

sub cont() {
    $name=$args[0];
    $cam=ucfirst($name);
    $out="src/modules/$name/$name.controller.ts";
    open(OUT,'>',"$out") or die "Error writting to $out";
    print OUT <<EOF;
import { Controller, Get } from '\@nestjs/common';
import { ${cam}Service } from './$name.service';

\@Controller('$name')
export class ${cam}Controller {
  constructor(private readonly attrService: ${cam}Service) {}

  \@Get()
  getHello(): string[] {
    return this.attrService.getAttr();
  }
}
EOF
    close OUT;
}
