import 'dart:async';
import 'dart:developer' as developer;

import 'package:bloc/bloc.dart';
import 'package:flutter_filesundefined/index.dart';

class NewBloc extends Bloc<NewEvent, NewState> {

  NewBloc(NewState initialState) : super(initialState);

  @override
  Stream<NewState> mapEventToState(
    NewEvent event,
  ) async* {
    try {
      yield* event.applyAsync(currentState: state, bloc: this);
    } catch (_, stackTrace) {
      developer.log('$_', name: 'NewBloc', error: _, stackTrace: stackTrace);
      yield state;
    }
  }
}
